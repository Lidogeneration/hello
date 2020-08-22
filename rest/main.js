const log = function(a, b, ...rest) {
  console.log(a, b, rest);
};

log(1,3,4,5,6,7,8);

function calcOrDouble (number, basis = 2) {
  console.log(number * basis);
}

calcOrDouble(3, 5);