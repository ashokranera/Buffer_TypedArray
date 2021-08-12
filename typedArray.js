
let buffer = new ArrayBuffer(8);
let view = new Uint16Array(buffer)
console.log(view);
view[0] = 2;
view[1] = 3;
view[2] = 4;
console.log(view)
