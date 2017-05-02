/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.1
 *   @summary Code demonstration: three types of JS comments || created: 04.28.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let var1, var2;
const CONST1 = 'Something';

/**
 * The dispatch method for our program
 * @param {null}
 * @returns {null}
 */
function main() {
     //Below, I will demonstrate how to 'turn off' code
     //setVar1();
     setVar2();
}

main();

/**
 * var1 mutator
 * @param {null}
 * @returns {null}
 */
function setVar1() {
     var1 = PROMPT.question(`\nPlease enter value: `);
}

/**
 * var2 mutator
 * @param {null}
 * @returns {null}
 */
function setVar2() {
     var2 = 0;
}

/*
 This program is designed to demonstrate JavaScript code commenting, explain the term API, & show library installations
 Topics:  Single-line, multi-line comments, JSDoc, npm install, API definition
 URLs:    https://medium.freecodecamp.com/what-is-an-api-in-english-please-b880a3214a82
          http://usejsdoc.org
 */