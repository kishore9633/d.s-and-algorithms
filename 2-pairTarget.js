// // const number = parseInt(prompt('Enter the number of terms: '))

// let n1 = 0,
//   n2 = 1,
//   nextTerm

// console.log('Fibonacci Series:')

// for (let i = 1; i <= number; i++) {
//   console.log(n1)
//   nextTerm = n1 + n2
//   n1 = n2
//   n2 = nextTerm
// }

let arr = [1, 10, 10, 2, 11, 7, 5, 5, 7, 9, 3, 3, 13]

var eq = [...new Set(arr)]
var v = []
for (var i = 0; i < eq.length; i++) {
  for (var j = i + 1; j < eq.length; j++) {
    if (eq[i] + eq[j] == 12) {
      v.push([eq[i], eq[j]])
    }
  }
}

console.log(v)
