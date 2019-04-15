const a = 'aaa';
const arr = [
  new Promise(),
  new Promise()
]

arr.map(item => {
  item.then(res => {
    console.log(res)
  })
})