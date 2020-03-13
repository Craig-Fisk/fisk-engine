import Renderable from "../interfaces/Renderable";
import StaticImageConfig from "../configs/StaticImage.config";
import { FiskGame } from "../index";

export default class StaticImage implements Renderable {
    renderable = true;
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement | HTMLCanvasElement;
    imageUrl: string
    constructor({image, x, y, game}: StaticImageConfig){
        this.imageUrl = image;
        this.x = x;
        this.y = y;
        this.image = game.images[this.imageUrl];
        this.width = this.image ? this.image.width : 0;
        this.height = this.image ? this.image.height : 0;
    }

    static fromImageOrCanvas(x: number, y: number, image: HTMLImageElement | HTMLCanvasElement, gameRef: FiskGame) {
        const staticImg = new StaticImage({image: '', x: x, y: y, game: gameRef});
        staticImg.image = image;
        staticImg.width = image.width;
        staticImg.height = image.height;
        return staticImg;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}