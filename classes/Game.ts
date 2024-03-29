import { Howl } from "howler";
import GameEntity from "../interfaces/GameEntity";
import iGameStage from "../interfaces/GameStage";
import ImageMap from "../interfaces/ImageMap";
import SoundMap from "../interfaces/SoundMap";
import GameConfig from "../configs/GameConfig";
import SoundConfig from "../interfaces/SoundConfig";
import Interactable from "../interfaces/Interactable";

export default class FiskGame {
  height: number;
  width: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  ctx: CanvasRenderingContext2D;
  player: any;
  customCollision: (a: GameEntity, b: GameEntity) => any | null = () => {};
  currentStage: iGameStage | undefined;
  imagesLoaded: number = 0;
  totalImages: number = 0;
  images: ImageMap;
  soundsLoaded: number = 0;
  totalSounds: number = 0;
  sounds: SoundMap = {};
  soundNames: string[] = [];
  currentKeys: string[] = [];
  stageData: {
    [key: string]: {};
  } = {};
  onReady: (game: FiskGame) => void;
  logicLoop: number | undefined;
  audioContext: AudioContext;
  firstInteract = false;

  constructor(
    {
      height,
      width,
      images = [],
      sounds = [],
      selector,
      imageSmoothing = false,
      stageData = [],
      onReady = () => {},
      customCollision,
    }: GameConfig = {
      height: 0,
      width: 0,
      selector: "",
    }
  ) {
    this.width = width;
    this.height = height;
    this.canvas = this.createMainCanvas(selector);
    this.context = this.canvas.getContext("2d");
    this.ctx = this.context as CanvasRenderingContext2D;
    this.updateScale();
    this.bindScreenResize();
    this.setImageSmoothing(imageSmoothing);
    this.customCollision = customCollision
      ? customCollision
      : (a: GameEntity, b: GameEntity) => {};
    this.totalImages = images.length;
    this.totalSounds = sounds.length;
    this.images = {};
    this.onReady = onReady;
    this.audioContext = new AudioContext();

    this.preloadImages(images, () => {
      this.preloadSounds(sounds, () => {
        this.preloadData(stageData, () => {
          this.bindClick();
          this.setupKeyboardBinding();
          this.render();
          this.logicLoop = window.setInterval(this.logic.bind(this), 33);
          this.onReady(this);
        });
      });
    });
  }

  checkFirstInteract() {
    if (
      this.firstInteract === false &&
      this.audioContext.state === "suspended"
    ) {
      this.firstInteract = true;
      this.audioContext.resume();
    }
  }

  onKeydown(event: KeyboardEvent) {
    this.checkFirstInteract();
    if (this.currentStage) {
      this.currentStage.interactors.forEach((entity) => {
        if (entity.onKeydown) {
          entity.onKeydown(event, this);
        }
      });

      this.currentStage.onKeydownQueue.forEach((func) => {
        func(event, this);
      });
    }
  }

  onKeyup(event: KeyboardEvent) {
    this.checkFirstInteract();
    if (this.currentStage) {
      this.currentStage.interactors.forEach((entity) => {
        if (entity.onKeyup) {
          entity.onKeyup(event, this);
        }
      });

      this.currentStage.onKeyupQueue.forEach((func) => {
        func(event, this);
      });
    }
  }

  setupKeyboardBinding() {
    this.currentKeys = [];

    document.addEventListener(
      "keydown",
      (event) => {
        const index = this.currentKeys.indexOf(event.key);
        if (index < 0) {
          this.currentKeys.push(event.key);
          this.onKeydown(event);
        }
      },
      false
    );

    document.addEventListener(
      "keyup",
      (event) => {
        const index = this.currentKeys.indexOf(event.key);
        if (index >= 0) {
          this.currentKeys.splice(index, 1);
          this.onKeyup(event);
        }
      },
      false
    );
  }

  stopAllSounds() {
    this.soundNames.forEach((name) => {
      this.sounds[name].stop();
    });
  }

  preloadImages(arr: string[], callback: () => void) {
    function last(game: FiskGame, passedCallback: () => void) {
      game.imagesLoaded += 1;
      if (game.imagesLoaded === game.totalImages) {
        passedCallback();
      }
    }

    if (arr.length > 0) {
      arr.forEach((url) => {
        let image = new Image();
        image.onload = () => {
          this.images[url] = image;
          last(this, callback);
        };
        image.src = url;
      });
    } else {
      callback();
    }
  }

  preloadSounds(arr: SoundConfig[], callback: () => void) {
    function last(game: FiskGame, passedCallback: () => void) {
      game.soundsLoaded += 1;
      if (game.soundsLoaded === game.totalSounds) {
        passedCallback();
      }
    }

    if (arr.length > 0) {
      arr.forEach((options) => {
        options.onload = () => {
          last(this, callback);
        };
        this.sounds[options.name] = new Howl(options);
        this.soundNames.push(options.name);
      });
    } else {
      callback();
    }
  }

  preloadData(arr: string[], callback: () => void) {
    let count = 0;
    if (arr.length > 0) {
      arr.forEach(async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        this.stageData[url] = data;
        count += 1;
        if (count === arr.length) {
          callback();
        }
      });
    } else {
      callback();
    }
  }

  get scale() {
    const scaleX = window.innerWidth / this.canvas.offsetWidth;
    const scaleY = window.innerHeight / this.canvas.offsetHeight;
    const scaleToFit = Math.min(scaleX, scaleY);
    return scaleToFit;
  }

  updateScale() {
    const scale = this.scale;
    const canvasSize = this.canvas.offsetWidth * scale;
    const diff = window.innerWidth - canvasSize;
    const initTranslateX = (window.innerWidth - this.canvas.offsetWidth) / 2;
    const initTranslateY = (window.innerHeight - this.canvas.offsetHeight) / 2;
    this.canvas.style.transformOrigin = "50% 50%";
    this.canvas.style.transform = `translateX(${initTranslateX}px) translateY(${initTranslateY}px) scale(${scale})`;
  }

  bindScreenResize() {
    window.addEventListener("resize", this.updateScale.bind(this), false);
  }

  getClick(event: MouseEvent) {
    return {
      x: event.offsetX - 5,
      y: event.offsetY - 5,
      width: 10,
      height: 10,
    };
  }

  getTouch(event: TouchEvent, game: FiskGame) {
    const canvasBounds = game.canvas.getBoundingClientRect();
    const x = event.changedTouches[0].pageX - canvasBounds.left;
    const y = event.changedTouches[0].pageY - canvasBounds.top;
    const percentWidth = ((x - 5) / canvasBounds.width) * 100;
    const percentHeight = ((y - 5) / canvasBounds.height) * 100;
    return {
      x: (game.width * percentWidth) / 100,
      y: (game.height * percentHeight) / 100,
      width: 10,
      height: 10,
    };
  }

  onClick(event: MouseEvent) {
    this.checkFirstInteract();
    if (this.currentStage) {
      event.preventDefault();
      const click = this.getClick(event);

      let clicked: Interactable | undefined;
      this.currentStage.interactors.forEach((element) => {
        if (
          this.simpleCollisionCheck(
            click as GameEntity,
            element as Interactable
          )
        ) {
          clicked = element;
        }
      });

      if (!clicked) {
        this.currentStage.onClickQueue.forEach((func) => {
          func(event, this);
        });
      } else {
        if (clicked.onClick) {
          clicked.onClick(event, this);
        }
      }
    }
  }

  onTouch(event: TouchEvent) {
    this.checkFirstInteract();
    if (this.currentStage) {
      event.preventDefault();
      const touch = this.getTouch(event, this);

      let touched: Interactable | undefined;
      this.currentStage.interactors.forEach((element) => {
        if (this.simpleCollisionCheck(touch as GameEntity, element)) {
          touched = element;
        }
      });

      if (!touched) {
        this.currentStage.onTouchQueue.forEach((func) => {
          func(event, this);
        });
      } else {
        if (touched.onTouch) {
          touched.onTouch(event, this);
        }
      }
    }
  }

  onMouseMove(event: MouseEvent) {
    if (this.currentStage) {
      event.preventDefault();
      if (this.currentStage.onMouseMoveQueue.length > 0) {
        this.currentStage.onMouseMoveQueue.forEach((func) => {
          func(event, this);
        });
      }
    }
  }

  onMouseUp(event: MouseEvent) {
    if (this.currentStage) {
      event.preventDefault();
      if (this.currentStage.onMouseUpQueue.length > 0) {
        this.currentStage.onMouseUpQueue.forEach((func) => {
          func(event, this);
        });
      }
    }
  }

  onMouseDown(event: MouseEvent) {
    if (this.currentStage) {
      event.preventDefault();
      if (this.currentStage.onMouseDownQueue.length > 0) {
        this.currentStage.onMouseDownQueue.forEach((func) => {
          func(event, this);
        });
      }
    }
  }

  onTouchMove(event: TouchEvent) {
    if (this.currentStage) {
      event.preventDefault();
      if (this.currentStage.onTouchMoveQueue.length > 0) {
        this.currentStage.onTouchMoveQueue.forEach((func) => {
          func(event, this);
        });
      }
    }
  }

  onTouchEnd(event: TouchEvent) {
    if (this.currentStage) {
      event.preventDefault();
      if (this.currentStage.onTouchEndQueue.length > 0) {
        this.currentStage.onTouchEndQueue.forEach((func) => {
          func(event, this);
        });
      }
    }
  }

  bindClick() {
    this.canvas.addEventListener("touchstart", this.onTouch.bind(this));
    this.canvas.addEventListener("touchend", this.onTouchEnd.bind(this));
    this.canvas.addEventListener("click", this.onClick.bind(this));
    this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
    this.canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.canvas.addEventListener("touchmove", this.onTouchMove.bind(this));
  }

  createMainCanvas(selector: string): HTMLCanvasElement {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const parent: HTMLElement | null = document.querySelector(selector);
    if (canvas && parent) {
      canvas.width = this.width;
      canvas.height = this.height;
      parent.appendChild(canvas);
      return canvas;
    } else {
      throw `Selector: "${selector}" doesn't exist in document`;
    }
  }

  setImageSmoothing(smoothing: boolean) {
    this.ctx.imageSmoothingEnabled = smoothing;
  }

  render(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    if (this.currentStage) {
      this.currentStage.renderQueue.forEach((element) => {
        element.render(this.ctx);
      });
    }
    window.requestAnimationFrame(this.render.bind(this));
  }

  collisionCheck(a: GameEntity, b: GameEntity): boolean | any {
    if (this.customCollision !== null) {
      return this.customCollision(a, b);
    } else {
      return this.simpleCollisionCheck(a, b);
    }
  }

  simpleCollisionCheck(a: GameEntity, b: GameEntity): boolean {
    if (a.width && b.width && a.height && b.height) {
      if (
        (a.x >= b.x && a.x <= b.x + b.width) ||
        (a.x + a.width >= b.x && a.x + a.width <= b.x + b.width)
      ) {
        if (
          (a.y >= b.y && a.y <= b.y + b.height) ||
          (a.y + a.height >= b.y && a.y + a.height <= b.y + b.height)
        ) {
          return true;
        }
        return false;
      }
    }
    return false;
  }

  logic() {
    if (this.currentStage) {
      this.currentStage.logicQueue.forEach((element) => {
        element.logic(this);
      });
    }
  }
}
