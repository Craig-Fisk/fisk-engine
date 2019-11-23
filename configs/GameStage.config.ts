import GameEntity from "../interfaces/GameEntity";
import FiskGame from "../classes/Game";

export default interface GameStageConfig {
    entities: GameEntity[];
    onClickQueue?: ((event: MouseEvent, game: FiskGame) => void)[];
    onTouchQueue?: ((event: TouchEvent, game: FiskGame) => void)[];
    onKeydownQueue?: ((event: KeyboardEvent, game: FiskGame) => void)[];
    onKeyupQueue?: ((event: KeyboardEvent, game: FiskGame) => void)[];
    gameReference: FiskGame;
}