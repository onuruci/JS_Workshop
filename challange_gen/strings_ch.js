const { ethers } = require("ethers");

let wordArr = [
  "couch",
  "gather",
  "dragon",
  "fold",
  "despair",
  "jazz",
  "aunt",
  "carry",
  "imitate",
  "defy",
  "buzz",
  "lecture",
];

let words =
  "couch gather dragon fold despair jazz aunt carry imitate defy buzz lecture";

let invalidWords = [
  "cAouAcAAAAhAAA",
  "gAaAAAtAAAAAhAAAAAeAAr",
  "dAAAAAraAgAAAAAoAAAAAnAAA",
  "fAAoAAAlAAAdAAA",
  "deAAAAsAAAApAAAaAAAAAiAAAArAAAAA",
  "jAAAAaAzzAAAAA",
  "aAuAAAnAAAAtAA",
  "cAAAAAaArAAryA",
  "iAAAAmAAAAiAAtAAAaAAtAAeAAA",
  "dAAeAAAfAAAyAAAA",
  "bAuAAzAAz",
  "lAeAAAAActurAAAeAA",
];

function main() {
  for (let i = 0; i < wordArr.length; i++) {
    let w = wordArr.at(i);
    let wInv = "";
    for (let j = 0; j < w.length; j++) {
      wInv += w.charAt(j);
      wInv += "A".repeat(Math.floor(Math.random() * 6));
    }
    invalidWords.push(wInv);
  }
  console.log(invalidWords);
}

main();
