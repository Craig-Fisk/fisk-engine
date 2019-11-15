import FiskGame from "../index";

export default interface Logical {
	logical: boolean;
	logic: (game: FiskGame) => void;
}