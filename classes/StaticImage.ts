import Renderable from "../interfaces/Renderable";
import StaticImageConfig from "../configs/StaticImage.config";

export default class StaticImage implements Renderable {
    renderable = true;
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement | HTMLCanvasElement;
    imageUrl: string;
    startX?: number;
    startY?: number;
    constructor({image, x, y, startX, startY, width, height}: StaticImageConfig){
        this.imageUrl = image instanceof HTMLImageElement ? image.src : 'canvas';
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width ? width : this.image.width;
        this.height = height ? height : this.image.height;
        this.startX = startX;
        this.startY = startY;
    }

    render(ctx: CanvasRenderingContext2D) {
        if(this.startX && this.startY) {
            ctx.drawImage(this.image, this.startX, this.startY, this.width, this.height, this.x, this.y, this.width, this.height);
        } else {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}