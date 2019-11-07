import FiskGame from "../index";

export default interface Logical {
	logical: true;
	logic: (game: FiskGame) => void;
}