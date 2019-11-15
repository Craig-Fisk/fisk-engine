import GameEntity from "./GameEntity";

export default interface Collidable extends GameEntity {
	collidable: boolean;
	collisionResponse?: (response: any) => void;
}