import GameEntity from "./GameEntity";
import FiskGame from "../index";

export default interface Interactable extends GameEntity {
	interactive: boolean;
	onClick: (event: MouseEvent, game: FiskGame) => void;
	onTouch: (event: TouchEvent, game: FiskGame) => void;
}