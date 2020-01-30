import GameEntity from "../interfaces/GameEntity";
import FiskGame from "../classes/Game";
export default interface GameConfig {
    height: number;
    width: number;
    images?: string[];
    sounds?: any[];
    selector: string;
    imageSmoothing?: boolean;
    customCollision?: (a: GameEntity, b: GameEntity) => any;
    stageData?: string[];
    onReady?: (game: FiskGame) => void;
}
