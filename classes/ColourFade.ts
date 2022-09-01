import FiskGame from "../classes/Game";
import Logical from "fisk-engine/interfaces/Logical";
import Renderable from "fisk-engine/interfaces/Renderable";
import hexToRgb from "../utilities/hexToRgb";
import rgbToRgba from "../utilities/rgbToRgba";

export type ColourFadeConfig = {
    colour: string, 
    inSec: number, 
    outSec: number, 
    delay: number,
    onDelayEnd?: () => void,
    onFadeInEnd?: () => void,
    onFadeOutEnd?: () => void,
    gameRef: FiskGame
}

export class ColourFade implements Logical, Renderable {
    x: number;
    y: number;
    width: number;
    height: number;
    logical: boolean;
    renderable: boolean;
    inTimer: number;
    maxIn: number;
    outTimer: number;
    maxOut: number;
    colour: string;
    delayTimer: number;
    alpha: number;
    renderString: string;
    onDelayEnd?: () => void;
    onFadeInEnd?: () => void;
    onFadeOutEnd?: () => void;


    constructor(config: ColourFadeConfig){
        this.x = 0;
        this.y = 0;
        this.inTimer = 0;
        this.outTimer = config.outSec * 33;
        this.maxIn = config.inSec * 33;
        this.maxOut = this.outTimer;
        this.delayTimer = config.delay * 33;
        const colour = hexToRgb(config.colour);
        this.colour = colour ? colour : 'rgb(0, 0, 0)';
        this.alpha = 0;
        this.renderString = rgbToRgba(this.colour, this.alpha.toString());
        this.onDelayEnd = config.onDelayEnd;
        this.onFadeInEnd = config.onFadeInEnd;
        this.onFadeOutEnd = config.onFadeOutEnd;
        this.logical = true;
        this.renderable = true;
        this.width = config.gameRef.width;
        this.height = config.gameRef.height;
    }

    logic(gameRef: FiskGame) {
        if(!this.width) {
            this.width = gameRef.width;
            this.height = gameRef.height;
        }

        if(this.delayTimer > 0) {
            this.delayTimer -= 1;
            if(this.delayTimer === 0 && this.onDelayEnd) {
                this.onDelayEnd();
            }
        } else if(this.inTimer < this.maxIn) {
            this.inTimer += 1;
            this.alpha = Math.round((this.inTimer / this.maxIn) * 100) / 100;
            if(this.inTimer === this.maxIn && this.onFadeInEnd) {
                this.onFadeInEnd();
            }
        } else if(this.outTimer > 0) {
            this.outTimer -= 1;
            this.alpha = Math.round((this.outTimer / this.maxOut) * 100) / 100;
            if(this.outTimer === 0 && this.onFadeOutEnd) {
                this.onFadeOutEnd();
            }
        }
        this.renderString = rgbToRgba(this.colour, this.alpha.toString());
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.renderString;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}