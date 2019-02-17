class Library {
  titles: string[] = [];

  constructor(){}
}

const library = new Library();

// sometime later & elsewhere in our codebase

const shortTitles: string[] = library.titles.filter(
  (title: string): boolean => title.length < 5
)