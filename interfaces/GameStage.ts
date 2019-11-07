import Logical from "./Logical";

import Renderable from "./Renderable";

import Interactable from "./Interactable";

export default interface GameStage {
	logicQueue: Logical[];
	renderQueue: Renderable[];
	interactors: Interactable[];
}