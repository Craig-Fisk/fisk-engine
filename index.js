import { Howl } from 'howler';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class FiskGame {
    constructor({ height, width, images = [], sounds = [], selector, imageSmoothing = false, stageData = [], onReady = () => { }, customCollision } = {
        height: 0,
        width: 0,
        selector: ""
    }) {
        this.customCollision = () => { };
        this.imagesLoaded = 0;
        this.totalImages = 0;
        this.soundsLoaded = 0;
        this.totalSounds = 0;
        this.sounds = {};
        this.soundNames = [];
        this.currentKeys = [];
        this.stageData = {};
        this.width = width;
        this.height = height;
        this.canvas = this.createMainCanvas(selector);
        this.context = this.canvas.getContext('2d');
        this.ctx = this.context;
        this.updateScale();
        this.bindScreenResize();
        this.setImageSmoothing(imageSmoothing);
        this.customCollision = customCollision ? customCollision : (a, b) => { };
        this.totalImages = images.length;
        this.totalSounds = sounds.length;
        this.images = {};
        this.onReady = onReady;
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
    onKeydown(event) {
        if (this.currentStage) {
            this.currentStage.interactors.forEach(entity => {
                if (entity.onKeydown) {
                    entity.onKeydown(event, this);
                }
            });
            this.currentStage.onKeydownQueue.forEach(func => {
                func(event, this);
            });
        }
    }
    onKeyup(event) {
        if (this.currentStage) {
            this.currentStage.interactors.forEach(entity => {
                if (entity.onKeyup) {
                    entity.onKeyup(event, this);
                }
            });
            this.currentStage.onKeyupQueue.forEach(func => {
                func(event, this);
            });
        }
    }
    setupKeyboardBinding() {
        this.currentKeys = [];
        document.addEventListener('keydown', event => {
            const index = this.currentKeys.indexOf(event.key);
            if (index < 0) {
                this.currentKeys.push(event.key);
                this.onKeydown(event);
            }
        }, false);
        document.addEventListener('keyup', event => {
            const index = this.currentKeys.indexOf(event.key);
            if (index >= 0) {
                this.currentKeys.splice(index, 1);
                this.onKeyup(event);
            }
        }, false);
    }
    stopAllSounds() {
        this.soundNames.forEach(name => {
            this.sounds[name].stop();
        });
    }
    preloadImages(arr, callback) {
        function last(game, passedCallback) {
            game.imagesLoaded += 1;
            if (game.imagesLoaded === game.totalImages) {
                passedCallback();
            }
        }
        if (arr.length > 0) {
            arr.forEach(url => {
                let image = new Image();
                image.onload = () => {
                    this.images[url] = image;
                    last(this, callback);
                };
                image.src = url;
            });
        }
        else {
            callback();
        }
    }
    preloadSounds(arr, callback) {
        function last(game, passedCallback) {
            game.soundsLoaded += 1;
            if (game.soundsLoaded === game.totalSounds) {
                passedCallback();
            }
        }
        if (arr.length > 0) {
            arr.forEach(options => {
                options.onload = () => {
                    last(this, callback);
                };
                this.sounds[options.name] = new Howl(options);
                this.soundNames.push(options.name);
            });
        }
        else {
            callback();
        }
    }
    preloadData(arr, callback) {
        let count = 0;
        arr.forEach((url) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const data = yield response.json();
            this.stageData[url] = data;
            count += 1;
            if (count === arr.length) {
                callback();
            }
        }));
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
        const initTranslateX = ((window.innerWidth - this.canvas.offsetWidth) / 2);
        const initTranslateY = ((window.innerHeight - this.canvas.offsetHeight) / 2);
        this.canvas.style.transformOrigin = '50% 50%';
        this.canvas.style.transform = `translateX(${initTranslateX}px) translateY(${initTranslateY}px) scale(${scale})`;
    }
    bindScreenResize() {
        window.addEventListener('resize', this.updateScale.bind(this), false);
    }
    getClick(event) {
        return {
            x: event.offsetX - 5,
            y: event.offsetY - 5,
            width: 10,
            height: 10
        };
    }
    getTouch(event, game) {
        const canvasBounds = game.canvas.getBoundingClientRect();
        const x = event.changedTouches[0].pageX - canvasBounds.left;
        const y = event.changedTouches[0].pageY - canvasBounds.top;
        const percentWidth = (x - 5) / canvasBounds.width * 100;
        const percentHeight = (y - 5) / canvasBounds.height * 100;
        return {
            x: game.width * percentWidth / 100,
            y: game.height * percentHeight / 100,
            width: 10,
            height: 10
        };
    }
    onClick(event) {
        if (this.currentStage) {
            event.preventDefault();
            const click = this.getClick(event);
            let clicked;
            this.currentStage.interactors.forEach(element => {
                if (this.simpleCollisionCheck(click, element)) {
                    clicked = element;
                }
            });
            if (!clicked) {
                this.currentStage.onClickQueue.forEach(func => {
                    func(event, this);
                });
            }
            else {
                if (clicked.onClick) {
                    clicked.onClick(event, this);
                }
            }
        }
    }
    onTouch(event) {
        if (this.currentStage) {
            event.preventDefault();
            const touch = this.getTouch(event, this);
            let touched;
            this.currentStage.interactors.forEach(element => {
                if (this.simpleCollisionCheck(touch, element)) {
                    touched = element;
                }
            });
            if (!touched) {
                this.currentStage.onTouchQueue.forEach(func => {
                    func(event, this);
                });
            }
            else {
                if (touched.onTouch) {
                    touched.onTouch(event, this);
                }
            }
        }
    }
    bindClick() {
        this.canvas.addEventListener("touchstart", this.onTouch.bind(this));
        this.canvas.addEventListener("mousedown", this.onClick.bind(this));
    }
    createMainCanvas(selector) {
        const canvas = document.createElement('canvas');
        const parent = document.querySelector(selector);
        if (canvas && parent) {
            canvas.width = this.width;
            canvas.height = this.height;
            parent.appendChild(canvas);
            return canvas;
        }
        else {
            throw `Selector: "${selector}" doesn't exist in document`;
        }
    }
    setImageSmoothing(smoothing) {
        this.ctx.imageSmoothingEnabled = smoothing;
    }
    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        if (this.currentStage) {
            this.currentStage.renderQueue.forEach(element => {
                element.render(this.ctx);
            });
        }
        window.requestAnimationFrame(this.render.bind(this));
    }
    collisionCheck(a, b) {
        if (this.customCollision !== null) {
            return this.customCollision(a, b);
        }
        else {
            return this.simpleCollisionCheck(a, b);
        }
    }
    simpleCollisionCheck(a, b) {
        if (a.width && b.width && a.height && b.height) {
            if ((a.x >= b.x && a.x <= b.x + b.width) ||
                (a.x + a.width >= b.x && a.x + a.width <= b.x + b.width)) {
                if ((a.y >= b.y && a.y <= b.y + b.height) ||
                    (a.y + a.height >= b.y && a.y + a.height <= b.y + b.height)) {
                    return true;
                }
                return false;
            }
        }
        return false;
    }
    logic() {
        if (this.currentStage) {
            this.currentStage.logicQueue.forEach(element => {
                element.logic(this);
            });
        }
    }
}

class GameStage {
    constructor(config = {
        entities: [],
        gameReference: {}
    }) {
        this.logicQueue = [];
        this.renderQueue = [];
        this.onClickQueue = [];
        this.entities = [];
        this.onClickQueue = config.onClickQueue ? config.onClickQueue : [];
        this.onTouchQueue = config.onTouchQueue ? config.onTouchQueue : [];
        this.onKeydownQueue = config.onKeydownQueue ? config.onKeydownQueue : [];
        this.onKeyupQueue = config.onKeyupQueue ? config.onKeyupQueue : [];
        this.collisionQueue = [];
        this.interactors = [];
        this.setupEntities(this.entities, config.gameReference);
        this.populateEntities(config.entities);
    }
    setupEntities(entities, game) {
        entities.forEach(entity => {
            if (entity.setup) {
                entity.setup(game);
            }
        });
    }
    populateEntities(entities) {
        entities.forEach(entity => {
            this.entities.push(entity);
            const interactable = entity;
            if (interactable.interactive) {
                this.interactors.push(interactable);
            }
            const logical = entity;
            if (logical.logical) {
                this.logicQueue.push(logical);
            }
            const renderable = entity;
            if (renderable.renderable) {
                this.renderQueue.push(renderable);
            }
            const collidable = entity;
            if (collidable.collidable) {
                this.collisionQueue.push(collidable);
            }
        });
    }
}

class StaticImage {
    constructor({ image, x, y, game }) {
        this.renderable = true;
        this.imageUrl = image;
        this.x = x;
        this.y = y;
        this.image = game.images[this.imageUrl];
        this.width = this.image ? this.image.width : 0;
        this.height = this.image ? this.image.height : 0;
    }
    static fromImageOrCanvas(x, y, image, gameRef) {
        const staticImg = new StaticImage({ image: '', x: x, y: y, game: gameRef });
        staticImg.image = image;
        staticImg.width = image.width;
        staticImg.height = image.height;
        return staticImg;
    }
    render(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class InteractiveImage extends StaticImage {
    constructor(config) {
        super(config);
        this.interactive = true;
        if (config.onClick) {
            this.onClick = config.onClick;
        }
        if (config.onTouch) {
            this.onTouch = config.onTouch;
        }
        if (config.onKeydown) {
            this.onKeydown = config.onKeydown;
        }
        if (config.onKeyup) {
            this.onKeyup = config.onKeyup;
        }
    }
}

export { FiskGame, GameStage, InteractiveImage, StaticImage };
