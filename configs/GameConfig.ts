import GameEntity from "../interfaces/GameEntity";
import iGameStage from "../interfaces/GameStage";

export default interface GameConfig {
	height: number;
	width: number;
	images?: string[];
	sounds?: any[];
	selector: string;
	imageSmoothing?: boolean;
	customCollision? : (a: GameEntity, b: GameEntity) => any;
	initialStage: iGameStage;
}