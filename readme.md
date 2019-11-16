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