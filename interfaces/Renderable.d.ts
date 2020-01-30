import GameEntity from "./GameEntity";
export default interface Renderable extends GameEntity {
    renderable: boolean;
    render: (ctx: CanvasRenderingContext2D) => void;
}
