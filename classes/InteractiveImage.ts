import StaticImage from "./StaticImage";
import Interactable from "../interfaces/Interactable";
import InteractiveImageConfig from "../configs/InteractiveImage.config";
import FiskGame from "./Game";

export default class InteractiveImage extends StaticImage implements Interactable {
    interactive = true;
    onClick: (event: MouseEvent, game: FiskGame) => void | undefined;
	onTouch: (event: TouchEvent, game: FiskGame) => void | undefined;
	onKeydown: (event: KeyboardEvent, game: FiskGame) => void | undefined;
	onKeyup: (event: KeyboardEvent, game: FiskGame) => void | undefined;
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
