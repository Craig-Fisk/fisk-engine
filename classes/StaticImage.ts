import Renderable from "../interfaces/Renderable";
import StaticImageConfig from "../configs/StaticImage.config";

export default class StaticImage implements Renderable {
    renderable = true;
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement;
    imageUrl: string
    constructor({image, x, y, game}: StaticImageConfig){
        this.imageUrl = image;
        this.x = x;
        this.y = y;
        this.image = game.images[this.imageUrl];
        this.width = this.image.width;
        this.height = this.image.height;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}