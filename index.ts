interface StringContainer {
  value: string
  format(): string
  split(): string[]
}

interface NumberContainer {
  value: number
  nearestPrime: number
  round(): number
}

type Item<T> = {
  id: T
  container: T extends string ? StringContainer : NumberContainer
}

const item: Item<string> = {
  id: 'asdad',
  container: {
    value: '123',
    format: () => 'hi',
    split: () => ['hi']
  },
}

//////////////////////

interface Book {
  id: string
  tableOfContents: string[]
}

interface Tv {
  id: number
  diagonal: number
}

interface IItemService {
  getItem<T extends string | number>(id: T): T extends string ? Book : Tv
}

let itemService: IItemService;

const book = itemService.getItem('10')
