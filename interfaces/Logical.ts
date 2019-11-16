import GameEntity from "./GameEntity";
import FiskGame from "../classes/Game";

export default interface Logical extends GameEntity {
	logical: boolean;
	logic: (game: FiskGame) => void;
}