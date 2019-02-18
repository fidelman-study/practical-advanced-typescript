const numbers: number[] = [2, 1]
const someObject = {
  id: 21,
  name: 'John'
}

const someBoolean: boolean = true

type Flatten<T> = T extends any
  ? T[number]
  : T extends object
    ? T[keyof T]
    : T

type NumbersArrayFlattened = Flatten<typeof numbers>
type SomeObjectFlattened = Flatten<typeof someObject>
type SomeBooleanFlattened = Flatten<typeof someBoolean>