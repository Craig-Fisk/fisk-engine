import StaticImage from "./StaticImage";
import Interactable from "../interfaces/Interactable";
import InteractiveImageConfig from "../configs/InteractiveImage.config";
import FiskGame from "./Game";
declare type clickFunction = (event: MouseEvent, game: FiskGame) => void;
declare type touchFunction = (event: TouchEvent, game: FiskGame) => void | undefined;
declare type keyboardFunction = (event: KeyboardEvent, game: FiskGame) => void;
export default class InteractiveImage extends StaticImage implements Interactable {
    interactive: boolean;
    onClick: clickFunction | undefined;
    onTouch: touchFunction | undefined;
    onKeydown: keyboardFunction | undefined;
    onKeyup: keyboardFunction | undefined;
    constructor(config: InteractiveImageConfig);
}
export {};
