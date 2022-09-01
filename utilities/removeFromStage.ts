import { FiskGame } from '..';
import { GameStage } from '..';
import Collidable from '../interfaces/Collidable';
import GameEntity from '../interfaces/GameEntity';
import Logical from '../interfaces/Logical';
import Renderable from '../interfaces/Renderable';

function isEngine(entity: GameStage | FiskGame): entity is FiskGame {
    return (<FiskGame>entity).currentStage !== undefined;
}

export default function removeFromStage(entity: GameEntity, gameStage: GameStage | FiskGame) {
    const stage = isEngine(gameStage) ? gameStage.currentStage as GameStage : gameStage;
    
    const entityIndex = stage.entities.indexOf(entity);
    const logicIndex = stage.logicQueue.indexOf(entity as Logical);
    const renderIndex = stage.renderQueue.indexOf(entity as Renderable);
    const collisionIndex = stage.collisionQueue.indexOf(entity as Collidable);

    if(entityIndex >= 0) {
        stage.entities.splice(entityIndex, 1);
    }
    if(logicIndex >= 0) {
        stage.logicQueue.splice(logicIndex, 1);
    }
    if(renderIndex >= 0) {
        stage.renderQueue.splice(renderIndex, 1);
    }
    if(collisionIndex >= 0) {
        stage.collisionQueue.splice(collisionIndex, 1);
    }
}