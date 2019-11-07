import GameEntity from "./GameEntity";

import GameStage from "./GameStage";

export default interface GameConfig {
	height: number;
	width: number;
	images?: string[];
	sounds?: any[];
	selector: string;
	imageSmoothing?: boolean;
	customCollision? : (a: GameEntity, b: GameEntity) => any;
	initialStage: GameStage;
}