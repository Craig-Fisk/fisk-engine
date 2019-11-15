import FiskGame from "../index";
import GameEntity from "./GameEntity";

export default interface Logical extends GameEntity {
	logical: boolean;
	logic: (game: FiskGame) => void;
}