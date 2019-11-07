export default interface Renderable {
    renderable: true;
	render: (ctx: CanvasRenderingContext2D) => void;
}