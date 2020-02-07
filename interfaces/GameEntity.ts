import FiskGame from "../classes/Game";
import Box from "./box";

export default interface GameEntity {
	x: number;
	y: number;
	width?: number;
	height?: number;
	polygon?: {x: number, y: number}[];
	hitbox?: Box
	setup?: (game:FiskGame) => void;
}