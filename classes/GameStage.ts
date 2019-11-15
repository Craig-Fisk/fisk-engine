import iGameStage from "../interfaces/GameStage";

import Logical from "../interfaces/Logical";

import Renderable from "../interfaces/Renderable";

import Interactable from "../interfaces/Interactable";

import FiskGame from "..";

import GameEntity from "../interfaces/GameEntity";
import GameStageConfig from "../configs/GameStage.config";
import Collidable from "../interfaces/Collidable";

export default class GameStage implements iGameStage {
	logicQueue: Logical[];
	renderQueue: Renderable[];
    onClickQueue: ((event: MouseEvent, game: FiskGame) => void)[];
    onTouchQueue: ((event: TouchEvent, game: FiskGame) => void)[];
    entities: GameEntity[];
    collisionQueue: Collidable[];
    interactors: Interactable[];
    onKeydownQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
    onKeyupQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
    
	constructor(config: GameStageConfig) {
		this.logicQueue = [];
		this.renderQueue = [];
		this.onClickQueue = [];
        this.entities = [];
        this.onClickQueue = config.onClickQueue ? config.onClickQueue : [];
        this.onTouchQueue = config.onTouchQueue ? config.onTouchQueue : [];
        this.onKeydownQueue = config.onKeydownQueue ? config.onKeydownQueue : [];
        this.onKeyupQueue = config.onKeyupQueue ? config.onKeyupQueue : [];
        this.collisionQueue = [];
        this.interactors = [];

        this.populateEntities(config.entities);
    }
    
    populateEntities(entities: GameEntity[]) {
        entities.forEach(entity => {
            const interactable = entity as Interactable;
            if(interactable.interactive) {
                this.interactors.push(interactable);
            }

            const logical = entity as Logical;
            if(logical.logical) {
                this.logicQueue.push(logical);
            }

            const renderable = entity as Renderable;
            if(renderable.renderable) {
                this.renderQueue.push(renderable);
            }

            const collidable = entity as Collidable;
            if(collidable.collidable) {
                this.collisionQueue.push(collidable);
            }
        });
    }
}