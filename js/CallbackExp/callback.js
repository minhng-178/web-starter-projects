var courses = [
  {
    id: 1,
    name: "Java",
    coin: 350,
  },
  {
    id: 2,
    name: "Python",
    coin: 250,
  },
  {
    id: 3,
    name: "PHP",
    coin: 100,
  },
  {
    id: 4,
    name: "Bash",
    coin: 0,
  },
];
//*****************************************************************************
//forEach2
Array.prototype.forEach2 = function (callback) {
  arrayLength = this.length;
  for (let i = 0; i < arrayLength; ++i) {
    callback(this[i], i);
  }
};
courses.forEach2(function (course, index) {
  console.log(index, course);
});
//every2
Array.prototype.every2 = function (callback) {
  arrayLength = this.length;
  for (let i = 0; i < arrayLength; ++i) {
    if (!callback(this[i])) return false;
  }
  return true;
};
console.log(courses.every2((e) => e.coin === 0));

//some2
Array.prototype.some2 = function (callback) {
  arrayLength = this.length;
  for (let i = 0; i < arrayLength; ++i) {
    if (callback(this[i])) return true;
  }
  return false;
};

console.log(courses.some2((e) => e.coin === 0));
//find2
Array.prototype.find2 = function (callback) {
  for (let i = 0; i < this.length; ++i) {
    if (callback(this[i])) return this[i];
  }
};

console.log(courses.find((e) => e.coin === 0));
//filter2
Array.prototype.filter2 = function (callback) {
  var filtered = [];
  for (let i = 0; i < this.length; ++i) {
    if (callback(this[i])) filtered[filtered.length] = this[i];
    // using push() method
    // filtered.push(this[i]);
  }
  return filtered;
};

console.log(courses.filter2((e) => e.coin === 0));
//map2()
Array.prototype.map2 = function (callback) {
  var mapped = [],
    arrayLength = this.length;
  for (let i = 0; i < arrayLength; ++i) {
    mapped.push(callback(this[i]));
  }
  return mapped;
};

console.log(
  courses.map2((e) => ({
    id: e.id,
    name: `Khoa hoc ${e.name}`,
    coin: e.coin,
    coinText: "Gia " + e.coin,
  }))
);
/**reduce with initial value
a: accumulator, e: element
tinh tong coin cua cac khoa hoc?
**/
Array.prototype.reduce2 = function (callback, res) {
  arrayLength = this.length;
  for (let i = 0; i < arrayLength; ++i) {
    res = callback(res, this[i]);
  }
  return res;
};
console.log(courses.reduce2((a, e) => a + e.coin, 0));
//reduce without itital value
var numbers = [1, 2, 4, 4, 8];

Array.prototype.reduce2 = function (callback, res) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    res = this[0];
  }
  for (; i < this.length; ++i) {
    res = callback(res, this[i], i, this);
  }
  return res;
};

console.log(numbers.reduce2((a, e) => a + e));
