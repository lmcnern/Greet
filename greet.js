exports.hello = function(name) {
  return 'Hello, ' + name + '!';
};

exports.goodbye = function(name) {
  return 'Goodbye, ' + name + '!';
};

console.log(exports.hello('Susie'));
console.log(exports.goodbye('Susie'));


