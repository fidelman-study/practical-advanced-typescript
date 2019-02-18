const halloweenCostumeIdeas: unknown = ['🚀', '🐼', '⭐️', '🐝', '💩',]

if (Array.isArray(halloweenCostumeIdeas)) {
  halloweenCostumeIdeas.indexOf('🚀')
}

halloweenCostumeIdeas.a.b.c.d
halloweenCostumeIdeas()

function randomCostume<T>(ideas: T[]): T {
  return ideas[Math.floor(Math.random() * ideas.length)]
}

randomCostume(halloweenCostumeIdeas as string[])