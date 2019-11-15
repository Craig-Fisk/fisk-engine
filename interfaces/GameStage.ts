import Logical from "./Logical";

import Renderable from "./Renderable";

import Interactable from "./Interactable";
import FiskGame from "../index";
import GameEntity from "./GameEntity";
import Collidable from "./Collidable";

export default interface iGameStage {
	logicQueue: Logical[];
	renderQueue: Renderable[];
	onClickQueue: ((event: MouseEvent, game: FiskGame) => void)[];
	onTouchQueue: ((event: TouchEvent, game: FiskGame) => void)[];
	onKeydownQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
	onKeyupQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
	entities: GameEntity[];
	collisionQueue: Collidable[];
	interactors: Interactable[];
}