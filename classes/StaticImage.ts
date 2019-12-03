import Renderable from "../interfaces/Renderable";
import StaticImageConfig from "../configs/StaticImage.config";
import { FiskGame } from "..";

export default class StaticImage implements Renderable {
    renderable = true;
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement;
    imageUrl: string
    constructor({image, x, y}: StaticImageConfig){
        this.imageUrl = image;
        this.x = x;
        this.y = y;
    }
    
    setup(game: FiskGame) {
        this.image = game.images[this.imageUrl];
        this.width = this.image.width;
        this.height = this.image.height;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}