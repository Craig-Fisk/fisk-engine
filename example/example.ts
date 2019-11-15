import Logical from "../interfaces/Logical";
import Renderable from "../interfaces/Renderable";
import FiskGame from "..";
import GameStage from "../classes/GameStage";

function startGame() {
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

    const myStage = new GameStage({entities: [myPlayer]});

    const myGame = new FiskGame({
        width: 1280,
        height: 720,
        selector: '.container',
        initialStage: myStage
    });
}

const _global = window as any
_global.startGame = startGame