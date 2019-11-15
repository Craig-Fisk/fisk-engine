import GameEntity from "../interfaces/GameEntity";
import FiskGame from "..";

export default interface GameStageConfig {
    entities: GameEntity[];
    onClickQueue?: ((event: MouseEvent, game: FiskGame) => void)[];
    onTouchQueue?: ((event: TouchEvent, game: FiskGame) => void)[];
}