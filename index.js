class Stack extends Array{

}

class Code{

}


let quoteInstruction = endQuote => cr => {
  let exit = false;
  let str = "";
  while(!exit){ // if there was a done function a for of loop could be used
    let char = cr.takeNextChar();
    if(char === endQuote) exit = true;
    str += char;
  }
  stack.pushString(str);
};

let instructions = { // there needs to way to find how long an instruction is before executing it
  "c": cr => {
    console.log(stack.pullString());
  },
  "\"": quoteInstruction("\""),
  "'": quoteInstruction("'"),
  // "{": quoteInstruction("}"),
  "(": cr => {
    let exit = false;
    let str = "";
    while(!exit){ // if there was a done function a for of loop could be used
      let char = cr.takeNextCode();
      if(char === ")") exit = true;
      str += char;
    }
    (new Code(str)).invoke();
  },
  "i": cr => {
    (new Code(stack.pullString()).invoke();
  },
  "#": cr => {
    let exit = false;
    let str = "";
    while(!exit){ // if there was a done function a for of loop could be used
      let nextChar = cr.readNextChar();
      if(!nextChar.match(/^[0-9\.\-]$/)) exit = true;
      str += cr.takeNextChar();
    }
    stack.pushNumber(+str);
  }
}


/*

Instructions
", ': Create String








 */
