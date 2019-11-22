# Fisk-Engine

Fisk-Engine is a Typescript based HTML5 game engine designed to work in all modern browsers that support the Canvas API.

## Install

`npm install fisk-engine --save-dev`

## Usage

For a full example of the usage see the example folder for a fully working browser game that uses the keyboard arrows keys as inputs.

```Typescript
import {FiskGame, GameStage} from "fisk-engine";

const myStage = new GameStage({entities: [...]});

const myGame = new FiskGame({
    width: 1280,
    height: 720,
    selector: '...',
    initialStage: myStage
});

```

## Interfaces

### GameEntity
Basic entity that must be implemented for other game entities and systems to interact with it.

```Typescript
interface GameEntity {
	x: number;
	y: number;
	width: number;
	height: number;
	hitbox?: {
		x: number,
		y: number,
		width: number,
		height: number
	}
}
```

### Logical
Extends GameEntity, must be implemented and have logical boolean set to true to be passed into logic loop in engine.

```Typescript
interface Logical extends GameEntity {
	logical: boolean;
	logic: (game: FiskGame) => void;
}
```

### Renderable
Extends GameEntity, must be implemented and have renderable boolean set to true to be passed into render loop in engine.

```Typescript
interface Renderable extends GameEntity {
    renderable: boolean;
	render: (ctx: CanvasRenderingContext2D) => void;
}
```

### Collidable
Extends GameEntity, must be implemented and have collidable boolean set to true to be passed into collisionQueue for give GameStage.

```Typescript
interface Collidable extends GameEntity {
	collidable: boolean;
	collisionResponse?: (response: any) => void;
}
```

### Interactable
Extends GameEntity, must be implemented and have interactive boolean set to true to have event methods called for given events.
Available events: onClick, onTouch, keyDown and keyUp.

```Typescript
interface Interactable extends GameEntity {
	interactive: boolean;
	onClick?: (event: MouseEvent, game: FiskGame) => void;
	onTouch?: (event: TouchEvent, game: FiskGame) => void;
	onKeydown?: (event: KeyboardEvent, game: FiskGame) => void;
	onKeyup?: (event: KeyboardEvent, game: FiskGame) => void;
}
```