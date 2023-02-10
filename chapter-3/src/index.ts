
// function square(n: number) {
//     return n * n
// }

// let a: any = 666
// let b: any = ['danger']
// let c: any = a + b

// let a: unknown = 30
// let b = a === 3
// let c = a + 10  // Error

// if (typeof a === 'number') {
//     let d = a + 10
// }

// let a = true
// var b = false
// const c = true
// let d: boolean = true
// let e: true = true
// type literal: a type that represents a value and nothing else

// let a = 1234
// var b = Infinity * 0.10
// const c = 5678
// let d: number = 100
// let e: 26.618 = 26.618
// let oneMillion: 1_000_000 = 1_000_000

// let a = 1234n
// const b = 5678n

// let a = 'billy'
// var b = 'hello'
// const c = '!'

// let a = Symbol('a')
// const b = Symbol('b')
// const c: unique symbol = Symbol('c')

// let a: { b: string } = {
//     b: 'x'
// }

// let b = {
//     c: {
//         d: 'f'
//     }
// }

// let c: {
//     firstName: string,
//     secondName: string
// } = {
//     firstName: 'john',
//     secondName: 'barrowman'
// }

// class Person {
//     constructor(
//         public firstName: string,
//         public secondName: string
//     ) {}
// }

// c = new Person('matt', 'smith')

// let d: {
//     a: string,
//     b?: number,
//     [key: number]: boolean  // index signature
// }

// let user: {
//     readonly firstName: string
// } = {
//     firstName: 'abby'
// }

// type Age = number

// type Person = {
//     name: string
//     age: number
// }

// let age: Age = 22

// let driver: Person = {
//     name: 'James May',
//     age: age
// }

// let a = [1, 2, 3]
// let b: string[] = ['a']
// let c = [1, 'a']

// let d = []
// d.push(1)

// let a: [number] = [1]
// let b: [string, string, number] = ['malcolm', 'gladwell', 1963]

// let trainFees: [number, number?][] = [
//     [3.75],
//     [8.25, 7.70]
// ]

// let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe']

// let as: readonly number[] = [1, 2, 3]
// let bs: readonly number[] = as.concat(4)


// exercises
// 1a. number
// 1b. string
// 1c. pineapples
// 1d. boolean[]
// 1e. { type: string }
// 1f. (number | boolean)[]
// 1g. number[]
// 1h. null

// 2a. there's a type literal used there, so the value must be the same as the type
// 2b. trying to push a string to a number[]
// 2c. never is used as a return type for functions that never return, but is being assigned to 4
// 2d. trying to assume a type for unknown
