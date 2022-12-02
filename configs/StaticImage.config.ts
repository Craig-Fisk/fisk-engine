import { FiskGame } from "../index";

export default interface StaticImageConfig {
    image: HTMLImageElement | HTMLCanvasElement;
    x: number;
    y: number;
    startX?: number;
    startY?: number;
    width?: number;
    height?: number;
}