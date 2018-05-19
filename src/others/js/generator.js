console.log('this is generator');
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

function* game() {
  const res = yield* helloWorldGenerator();
  console.log(res);
}

let g = game();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

var hw = helloWorldGenerator();
