const unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3]

const shuffled = unshuffled
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)

console.log(shuffled)
