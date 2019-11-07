export default interface GameEntity {
	x: number;
	y: number;
	width: number;
	height: number;
	hitbox?: {
		x: number,
		y: number,
		width: number,
		height: number
	}
}