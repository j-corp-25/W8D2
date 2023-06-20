// Your code here
Array.prototype.uniq = function() {
  const new_array = [];

  this.forEach(element => {
    if (!new_array.includes(element)) {
      new_array.push(element);
    }
  });

  return new_array;
};

console.log([1, 2, 2, 3, 3, 3].uniq()) // => [1,2,3]

Array.prototype.twoSum = function() {
  const new_array = [];

  this.forEach(element_1 => {
    this.forEach(element_2 => {
      const index_1 = this.indexOf(element_1);
      const index_2 = this.indexOf(element_2);
      if (element_1 + element_2 === 0 && index_1 < index_2) {
        new_array.push([index_1, index_2]);
      }
    });
  });

  return new_array;
};

console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]