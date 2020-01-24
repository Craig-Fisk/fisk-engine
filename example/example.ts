import { FiskGame, GameStage } from "..";
import Logical from "../interfaces/Logical";
import Renderable from "../interfaces/Renderable";
import Interactable from "../interfaces/Interactable";
import Collidable from "../interfaces/Collidable";

function startGame() {
    class Player implements Logical, Renderable, Interactable {
        constructor() {}
        x = 100;
        y = 100;
        width = 50;
        height = 100;
        speed = 0;
        gravity = 10;
        canJump = true;
        logical = true;
        interactive = true;
        renderable = true;
        onKeydown = (event: KeyboardEvent) => {
            switch(event.key){
            case 'ArrowLeft':
                this.speed = -10;
                break;
            case 'ArrowRight':
                this.speed = 10;
                break;
            case 'ArrowUp':
                if(this.canJump === true){
                this.gravity = -20;
                this.canJump = false;
                }
                break;
            }
        }
        onKeyup = (event: KeyboardEvent) => {
            switch(event.key){
            case 'ArrowLeft':
                this.speed = 0;
                break;
            case 'ArrowRight':
                this.speed = 0;
                break;
            }
        }

        logic = (game:FiskGame) => {
            this.gravity = this.gravity > 10 ? 10 : this.gravity + 2
            this.x += this.speed;
            this.y += this.gravity;
            this.collisionCheck(game);
        }

        render = (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = 'purple';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        collisionCheck = (game: FiskGame) => {
            let collisionObject: Collidable;

            game.currentStage.collisionQueue.forEach(entity => {
                if(game.simpleCollisionCheck(this, entity)) {
                    collisionObject = entity;
                }
            });

            if(collisionObject){
                this.y = collisionObject.y - this.height;
                this.canJump = true;
                if(collisionObject.collisionResponse){
                    collisionObject.collisionResponse(game);
                }
            }

            if(this.x + this.width > game.width){
                this.x = game.width - this.width;
            }
            
            if(this.x < 0){
                this.x = 0;
            }
        }
    }

    const myPlayer = new Player();

    class Block implements Renderable, Collidable {
        constructor(x:number, y:number){
            this.x = x;
            this.y = y;
        };
        width = 100;
        height = 100;
        x:number;
        y:number;
        renderable = true;
        collidable = true;
        render = (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = 'brown';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Goal implements Collidable, Renderable {
        constructor(x:number, y:number){
            this.x = x;
            this.y = y;
        };
        width = 100;
        height = 100;
        x:number;
        y:number;
        renderable = true;
        render = (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = 'Lime';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        collidable = true;
        collisionResponse = (param: any) => {
            const game = param as FiskGame;
            const player = game.currentStage.entities.filter(element => {
                return element.constructor === Player;
            });
            player[0].x = 100;
            player[0].y = 100;
        } 
    }

    const myGame = new FiskGame({
        width: 1200,
        height: 700,
        selector: '.container'
    });

    const myStage = new GameStage({
        entities: [
            myPlayer,
            new Block(0, 200), 
            new Block(100, 200), 
            new Block(200, 200), 
            new Block(300, 200), 
            new Block(400, 200), 
            new Block(500, 200), 
            new Block(600, 200), 
            new Block(700, 200), 
            new Block(800, 200), 
            new Block(900, 200), 
            new Block(1000, 200), 
            new Block(1100, 500), 
            new Block(1000, 500), 
            new Block(900, 500), 
            new Block(800, 500), 
            new Block(500, 500), 
            new Block(400, 500), 
            new Block(300, 500), 
            new Goal(0, 500)
        ], 
        gameReference: myGame
    });

    myGame.currentStage = myStage;
}

const _global = window as any
_global.startGame = startGame