import Renderable from "../interfaces/Renderable";
import StaticImageConfig from "../configs/StaticImage.config";

export default class StaticImage implements Renderable {
    renderable = true;
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement;
    constructor({image, x, y}: StaticImageConfig){
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = image.width;
        this.height = image.height;
    }
    render(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}