export default interface Collidable {
	collidable: true;
	collisionResponse: (response: any) => void;
}