// Your code here
const callback = function(el) {
  return el * 2;
}

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function (callback) {
  let new_arr = [];

  this.myEach(ele => { new_arr.push(callback(ele)) });

  return new_arr;
}

console.log(([1,2,3,4,5,6,7,8]).myMap(callback))

// Array.prototype.myReduce = function () {

// }