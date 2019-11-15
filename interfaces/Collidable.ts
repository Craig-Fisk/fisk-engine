import GameEntity from "./GameEntity";

export default interface Collidable extends GameEntity {
	collidable: true;
	collisionResponse: (response: any) => void;
}