
export const sqrt = Math.sqrt;
export function square(x){

return x * x;
}

function diag(x,y){
  return sqrt(square(x) + square(y));
}
module.exports=diag;
