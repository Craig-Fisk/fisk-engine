import StaticImageConfig from "./StaticImage.config";
import FiskGame from "../classes/Game";

export default interface InteractiveImageConfig extends StaticImageConfig {
    onClick?: (event: MouseEvent, game: FiskGame) => void;
	onTouch?: (event: TouchEvent, game: FiskGame) => void;
	onKeydown?: (event: KeyboardEvent, game: FiskGame) => void;
	onKeyup?: (event: KeyboardEvent, game: FiskGame) => void;
}