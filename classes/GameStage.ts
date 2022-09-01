import iGameStage from "../interfaces/GameStage";

import Logical from "../interfaces/Logical";

import Renderable from "../interfaces/Renderable";

import Interactable from "../interfaces/Interactable";

import GameEntity from "../interfaces/GameEntity";
import GameStageConfig from "../configs/GameStage.config";
import Collidable from "../interfaces/Collidable";
import FiskGame from "./Game";
import { removeFromStage } from "../index";

export default class GameStage implements iGameStage {
	logicQueue: Logical[];
	renderQueue: Renderable[];
    onClickQueue: ((event: MouseEvent, game: FiskGame) => void)[];
    onTouchQueue: ((event: TouchEvent, game: FiskGame) => void)[];
    onTouchMoveQueue: ((event: TouchEvent, game: FiskGame) => void)[];
    onMouseMoveQueue: ((event: MouseEvent, game: FiskGame) => void)[];
    entities: GameEntity[];
    collisionQueue: Collidable[];
    interactors: Interactable[];
    onKeydownQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
    onKeyupQueue: ((event: KeyboardEvent, game: FiskGame) => void)[];
    
	constructor(config: GameStageConfig = {
        entities: [],
        gameReference: {} as FiskGame
    }) {
		this.logicQueue = [];
		this.renderQueue = [];
		this.onClickQueue = [];
        this.entities = [];
        this.onClickQueue = config.onClickQueue ? config.onClickQueue : [];
        this.onTouchQueue = config.onTouchQueue ? config.onTouchQueue : [];
        this.onTouchMoveQueue = config.onTouchMoveQueue ? config.onTouchMoveQueue : [];
        this.onMouseMoveQueue = config.onMouseMoveQueue ? config.onMouseMoveQueue : [];
        this.onKeydownQueue = config.onKeydownQueue ? config.onKeydownQueue : [];
        this.onKeyupQueue = config.onKeyupQueue ? config.onKeyupQueue : [];
        this.collisionQueue = [];
        this.interactors = [];

        this.setupEntities(this.entities, config.gameReference);
        this.populateEntities(config.entities);
    }

    setupEntities(entities: GameEntity[], game: FiskGame) {
        entities.forEach(entity => {
            if(entity.setup) {
                entity.setup(game);
            }
        })
    }
    
    populateEntities(entities: GameEntity[]) {
        entities.forEach(entity => {
            this.entities.push(entity);

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

    removeEntity(entity: GameEntity) {
        removeFromStage(entity, this);
    }
}