
// function log(message: string, userId?: string) {
//     let time = new Date().toLocaleTimeString()
//     console.log(time, message, userId || 'Not signed in')
// }

type Context = {
    appId?: string
    userId?: string
}


function log(message: string, context: Context = {}) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, context.userId || 'Not signed in')
}

function sumVariadicSafe(...numbers: number[]) {
    return numbers.reduce((total, n) => total + n, 0)
}

function fancyDate(this: Date) {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

function* createFibonacciGenerator(): IterableIterator<number> {
    let a = 0
    let b = 1

    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

type Greet = (name: string) => string

// type Log = (message: string, userId?: string) => void

type Log = {
    (message: string, userId?: string): void
}

// type Filter = {
//     <T>(array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter = ...

// type Filter<T> = {
//     (array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter<number> = ...

//  Typescript infers the return type
//  It's not typesafe, you can use rest parameters instead

type Reserve = {
    (from: Date, to: Date, destination: string): void
    (from: Date, destination: string): void
    (destination: string): void
}

let reserve: Reserve = (
    fromOrDestination: Date |string, 
    toOrDestination?: Date | string,
    destination?: string
) => {

}