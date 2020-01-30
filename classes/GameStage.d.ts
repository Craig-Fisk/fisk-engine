import iGameStage from "../interfaces/GameStage";
import Logical from "../interfaces/Logical";
import Renderable from "../interfaces/Renderable";
import Interactable from "../interfaces/Interactable";
import GameEntity from "../interfaces/GameEntity";
import GameStageConfig from "../configs/GameStage.config";
import Collidable from "../interfaces/Collidable";
import FiskGame from "./Game";
export default class GameStage implements iGameStage {
    logicQueue: Logical[];
    renderQueue: Renderable[];
    onClickQueue: ((event: MouseEvent, game: FiskGame) => void)[];
    onTouchQueue: ((event: TouchEvent, game: FiskGame) => void)[];
    entities: GameEntity[];
    collisionQueue: Collidable[];
    interactors: Interactable[];
    onKeydownQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
    onKeyupQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
    constructor(config?: GameStageConfig);
    setupEntities(entities: GameEntity[], game: FiskGame): void;
    populateEntities(entities: GameEntity[]): void;
}
