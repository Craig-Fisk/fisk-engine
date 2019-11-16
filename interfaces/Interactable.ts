import GameEntity from "./GameEntity";
import FiskGame from "../classes/Game";

export default interface Interactable extends GameEntity {
	interactive: boolean;
	onClick?: (event: MouseEvent, game: FiskGame) => void;
	onTouch?: (event: TouchEvent, game: FiskGame) => void;
	onKeydown?: (event: KeyboardEvent, game: FiskGame) => void;
	onKeyup?: (event: KeyboardEvent, game: FiskGame) => void;
}