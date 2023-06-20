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

Array.prototype.transpose = function() {
  const transpose_array = [];
  let sub_array = [];

  let row = 0, col = 0;
  while (col < this.length) {
    while (row < this.length) {
      sub_array.push(this[row][col]);
      ++row;
    }
    ++col;
    row = 0;
    transpose_array.push(sub_array);
    sub_array = [];
  }

  return transpose_array
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]