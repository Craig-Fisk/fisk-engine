import Renderable from "../interfaces/Renderable";
import StaticImageConfig from "../configs/StaticImage.config";
export default class StaticImage implements Renderable {
    renderable: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement;
    imageUrl: string;
    constructor({ image, x, y, game }: StaticImageConfig);
    render(ctx: CanvasRenderingContext2D): void;
}
