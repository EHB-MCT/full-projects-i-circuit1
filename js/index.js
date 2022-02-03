"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

setup();

function setup() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

}

/* onClickMenu(); */

function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
}