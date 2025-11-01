"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
console.log("Hello, World!");
const greet = (name) => {
    return `Hello, ${name}!`;
};
exports.greet = greet;
console.log((0, exports.greet)("TypeScript"));
console.log("This is a sample TypeScript project.");
