import Logical from "./Logical";

import Renderable from "./Renderable";
import Interactable from "./Interactable";
import GameEntity from "./GameEntity";
import Collidable from "./Collidable";
import FiskGame from "../classes/Game";

export default interface iGameStage {
	logicQueue: Logical[];
	renderQueue: Renderable[];
	onClickQueue: ((event: MouseEvent, game: FiskGame) => void)[];
	onTouchQueue: ((event: TouchEvent, game: FiskGame) => void)[];
	onKeydownQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
	onKeyupQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
	onTouchMoveQueue: ((event: TouchEvent, game: FiskGame) => void)[];
	onMouseMoveQueue: ((event: MouseEvent, game: FiskGame) => void)[];
	entities: GameEntity[];
	collisionQueue: Collidable[];
	interactors: Interactable[];
	setupEntities: (entities: GameEntity[], game: FiskGame) => void;
}