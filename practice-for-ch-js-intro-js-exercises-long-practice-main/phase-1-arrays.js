// Your code here
Array.prototype.uniq = function() {
  const new_array = [];

  this.forEach(element => {
    if (!new_array.includes(element))
    {
      new_array.push(element);
    }
  });

  return new_array;
};

console.log([1, 2, 2, 3, 3, 3].uniq()) // => [1,2,3]
