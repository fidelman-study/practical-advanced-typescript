// type Pet = IDog | ICat

interface IAnimal {
  age: number
  eat(): void
  speak(): string
}

type AnimalTypeAlias = {
  age: number,
  eat(): void,
  speak(): string,
}

function feedAnimal(animal: IAnimal) {
  animal.eat()
}

class Animal implements IAnimal {
  age = 0

  eat() {
    console.log('nom..nom..')
  }

  speak() {
    return 'woof'
  }
}

///// Similar ////
type Eat = (food: string) => void
type AnimalList = string[]

interface IEat {
  (food: string): void
}

interface IAnimalList {
  [index: number]: string
}

interface IPet {
  pose(): void
}

interface IFeline {
  nightvision: boolean
}

type Cat = IPet & IFeline
interface ICat extends IPet, IFeline {
}

///// Diff //////
type PetType = IDog | ICat
interface IDog {}
interface ICat {}
interface IPet extends PetType {}
class Pet implements PetType {}


interface IFoo {
  a: string
}
interface IFoo {
  b: string
}
let foo: IFoo

type Foo = {
  a: string
}
type Foo = {
  b: string
}