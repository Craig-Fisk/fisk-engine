import Logical from "./Logical";

import Renderable from "./Renderable";

import Interactable from "./Interactable";
import FiskGame from "../index";
import GameEntity from "./GameEntity";

export default interface GameStage {
	logicQueue: Logical[];
	renderQueue: Renderable[];
	interactors: Interactable[];
	onClickQueue: ((game:FiskGame) => void)[];
	entities: GameEntity[];
}