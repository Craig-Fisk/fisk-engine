import GameStage from "../interfaces/GameStage";
import Logical from "../interfaces/Logical";
import Renderable from "../interfaces/Renderable";
import FiskGame from "..";

function startGame() {
    const myStage: GameStage = {
        entities: [],
        logicQueue: [],
        renderQueue: [],
        onClickQueue: [],
        interactors: []
    };

    class Player implements Logical, Renderable {
        constructor() {}
        x = 200;
        y = 500;
        width = 200;
        height = 350;
        logical = true;
        logic = () => {}
        renderable = true;
        render = (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    const myPlayer = new Player();

    myStage.entities.push(myPlayer);
    myStage.logicQueue.push(myPlayer);
    myStage.renderQueue.push(myPlayer);

    const myGame = new FiskGame({
        width: 1280,
        height: 720,
        selector: '.container',
        initialStage: myStage
    });
}

const _global = window as any
_global.startGame = startGame