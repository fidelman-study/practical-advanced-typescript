interface IPet {
  name: string
  age: number
  park?: string
}

type ReadonlyPet = {
  +readonly [K in keyof IPet]-?: IPet[K] // remove maybe props
}

const pet: IPet = {
  name: 'Buttons',
  age: 5,
}

const readonlyPet: ReadonlyPet = {
  name: 'Buttons',
  age: 5,
  park: 'Rigrac',
}

pet.age = 6
readonlyPet.age = 6