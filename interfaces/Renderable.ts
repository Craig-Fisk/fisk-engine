export default interface Renderable {
    renderable: boolean;
	render: (ctx: CanvasRenderingContext2D) => void;
}