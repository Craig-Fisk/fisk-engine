import StaticImage from "./StaticImage";
import Interactable from "../interfaces/Interactable";
import InteractiveImageConfig from "../configs/InteractiveImage.config";
import FiskGame from "./Game";

type clickFunction = (event: MouseEvent, game: FiskGame) => void;
type touchFunction = (event: TouchEvent, game: FiskGame) => void | undefined;
type keyboardFunction = (event: KeyboardEvent, game: FiskGame) => void;

export default class InteractiveImage extends StaticImage implements Interactable {
    interactive = true;
    onClick: clickFunction | undefined;
	onTouch: touchFunction | undefined;
	onKeydown: keyboardFunction | undefined;
	onKeyup: keyboardFunction | undefined;
    constructor (config: InteractiveImageConfig) {
        super(config);
        if(config.onClick) {
            this.onClick = config.onClick;
        }
        if(config.onTouch) {
            this.onTouch = config.onTouch;
        }
        if(config.onKeydown) {
            this.onKeydown = config.onKeydown;
        }
        if(config.onKeyup) {
            this.onKeyup = config.onKeyup;
        }
    }
}
