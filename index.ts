import GameEntity from "./interfaces/GameEntity";
import GameStage from "./interfaces/GameStage";
import GameConfig from "./interfaces/GameConfig";
import Interactable from "./interfaces/Interactable";
import SoundConfig from "./interfaces/SoundConfig";
import ImageMap from "./interfaces/ImageMap";
import SoundMap from "./interfaces/SoundMap";
import {Howl, Howler} from "howler";

export default class FiskGame {
	height: number;
	width: number;
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D | null;
    ctx: CanvasRenderingContext2D;
	player: any;
	customCollision: (a: GameEntity, b: GameEntity) => any | null;
	currentStage: GameStage;
    logicLoop: number;
	imagesLoaded: number = 0;
	totalImages: number = 0;
	images: ImageMap;
	soundsLoaded: number = 0;
	totalSounds: number = 0;
	sounds: SoundMap;

	constuctor({ 
		height, 
		width, 
		images = [], 
		sounds = [], 
		selector, 
		imageSmoothing = false,
		customCollision = null,
		initialStage
	}: GameConfig) {
		this.width = width;
		this.height = height;
		this.canvas = this.createMainCanvas(selector);
		this.context = this.canvas.getContext('2d');
		this.ctx = this.context as CanvasRenderingContext2D;
		this.updateScale();
		this.bindScreenResize();
		this.setImageSmoothing(imageSmoothing);
		this.customCollision = customCollision;
		this.totalImages = images.length;
		this.currentStage = initialStage;

		this.preloadImages(images, () => {
            this.preloadSounds(sounds, () => {
				this.render();
				this.logicLoop = window.setInterval(this.logic.bind(this), 33);
				this.bindClick();
            });
        });
	}
	
	preloadImages(arr: string[], callback: () => void) {
        function last(game: FiskGame, passedCallback: () => void) {
            game.imagesLoaded += 1;
            if(game.imagesLoaded === game.totalImages) {
                passedCallback();
            }
        }

        arr.forEach(url => {
            let image = new Image();
            image.onload = () => {
                this.images[url] = image;
                last(this, callback);
            };
            image.src = url;
        });
	}
	
	preloadSounds(arr: SoundConfig[], callback: () => void) {
        function last(game: FiskGame, passedCallback: () => void) {
            game.soundsLoaded += 1;
            if(game.soundsLoaded === game.totalSounds) {
                passedCallback();
            }
        }

        arr.forEach(options => {
            options.onload = () => {
                last(this, callback);
            };
            this.sounds[options.name] = new Howl(options);
        });
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
        const initTranslateX = ((window.innerWidth - this.canvas.offsetWidth) / 2);
        const initTranslateY = ((window.innerHeight - this.canvas.offsetHeight) / 2);
        this.canvas.style.transformOrigin = '50% 50%';
        this.canvas.style.transform = `translateX(${initTranslateX}px) translateY(${initTranslateY}px) scale(${scale})`;
	}
	
	bindScreenResize() {
		window.addEventListener('resize', this.updateScale.bind(this), false);
	}
	
	getClick(event: MouseEvent) {
		return {
			x: event.offsetX - 5,
			y: event.offsetY - 5,
			width: 10,
			height: 10
		}
	}
	
	getTouch(event: TouchEvent, game: FiskGame) {
		const canvasBounds = game.canvas.getBoundingClientRect();
		const x = event.changedTouches[0].pageX - canvasBounds.left;
		const y = event.changedTouches[0].pageY - canvasBounds.top;
		return {
			x: (x / game.scale) - 5,
			y: (y / game.scale) - 5,
			width: 10,
			height: 10
		}
	}
	
	onClick(event: MouseEvent) {
		event.preventDefault();
		const click =  this.getClick(event);

		let clicked:Interactable;
		this.currentStage.interactors.forEach(element => {
			if(this.simpleCollisionCheck(click as GameEntity, element)) {
				clicked = element;
			}
		});
        
        if(!clicked){
			this.currentStage.onClickQueue.forEach(func => {
				func(this);
			});
        }else{
            clicked.onClick(event, this);
        }
	}
	
	onTouch(event: TouchEvent) {
		event.preventDefault();
		const touch = this.getTouch(event, this);

		let touched: Interactable;
		this.currentStage.interactors.forEach(element => {
			if(this.simpleCollisionCheck(touch as GameEntity, element)) {
				touched = element;
			}
		});

		if(!touched){
			this.currentStage.onClickQueue.forEach(func => {
				func(this);
			});
        }else{
            touched.onTouch(event, this);
        }
	}
	
	bindClick() {
		this.canvas.addEventListener("touchstart", this.onTouch.bind(this));
		this.canvas.addEventListener("mousedown", this.onClick.bind(this));
	}
	
	createMainCanvas(selector: string) : HTMLCanvasElement {
		const canvas: HTMLCanvasElement = document.createElement('canvas');
		const parent: HTMLElement = document.querySelector(selector);
		canvas.width = this.width;
		canvas.height = this.height;
		parent.appendChild(canvas);
		return canvas;
	}
	
	setImageSmoothing(smoothing: boolean) {
		// this.ctx.mozImageSmoothingEnabled = smoothing;
		// this.ctx.webkitImageSmoothingEnabled = smoothing;
		this.ctx.imageSmoothingEnabled = smoothing;
	}
	
	render(): void {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.currentStage.renderQueue.forEach(element => {
			element.render(this.ctx);
		});
		window.requestAnimationFrame(this.render.bind(this));
	}
	
	collisionCheck(a: GameEntity, b: GameEntity): boolean | any {
		if(this.customCollision !== null) {
			return this.customCollision(a, b);
		} else {
			return this.simpleCollisionCheck(a, b);
		}
	}
	
	simpleCollisionCheck(a: GameEntity, b: GameEntity): boolean {
		if ((a.x >= b.x && a.x <= b.x + b.width) ||
			(a.x + a.width >= b.x && a.x + a.width <= b.x + b.width)) {
				if ((a.y >= b.y && a.y <= b.y + b.height) || 
						(a.y + a.height >= b.y && a.y + a.height <= b.y + b.height)) {
							return true;
				}
			return false;
		}
		return false;
	}
	
	logic() {
		this.currentStage.logicQueue.forEach(element => {
			element.logic(this);
		});
	}
	
}