export interface Food {
  id: number,
  names: names,
  info: string,
  img: string,
  calories: number,
  vegan: boolean,
  category: category,
  macros: macroProperty[],
  micros: microProperty[],
  allergens: allergens[] | null,
  moreInfo: moreInfo | null
}

export enum category {
vegetables = 'vegetables',
fruits = 'fruits',
grains = 'grains',
legumes = 'legumes',
oilsFats = 'oils/fats',
dairy = 'dairy',
fish = 'fish',
meats = 'meats',
beverages = 'beverages',
spices = 'spices',
eggs = 'eggs',
pastries = 'pastries'
}

export enum macroNutrient {
protein = 'protein',
lipid = 'lipid',
glucid = 'glucid'
}

export enum vitamin {
  vitaminA = 'vitamin A',
  vitaminB = 'vitamin B',
  vitaminC = 'vitamin C',
  vitaminD = 'vitamin D',
  vitaminE = 'vitamin E',
  vitaminK = 'vitamin K',

}

export enum mineral {
  potassium = 'potassium',
  chlorine = 'chlorine',
  sodium = 'sodium',
  calcium = 'calcium',
  phosphorus = 'phosphorus',
  magnesium = 'magnesium',
  iron = 'iron',
  zinc = 'zinc',
  manganese = 'manganese',
  copper = 'copper',
  iodine = 'iodine',
  chromium = 'chromium',
  molybdenum = 'molybdenum',
  selenium = 'selenium',
  cobalt = 'cobalt'
}

export enum aminoacid {
  histidine = 'histidine',
  isoleucine = 'isoleucine',
  leucine = 'leucine',
  lysine = 'lysine',
  methionine = 'methionine',
  phenylalanine = 'phenylalanine',
  threonine = 'threonine',
  tryptophan = 'tryptophan',
  valine = 'valine'
}

export enum allergens {
  gluten = 'gluten',
  peanuts = 'peanuts',
  treeNuts = 'tree nuts',
  celery = 'celery',
  mustard = 'mustard',
  eggs = 'eggs',
  milk = 'milk',
  sesame = 'sesame',
  fish = 'fish',
  crustaceans = 'crustaceans',
  molluscs = 'molluscs',
  soya = 'soya',
  sulphites = 'sulphites',
  lupin = 'lupin'
}

type names = {en: string, es: string, fr: string}

type omega3 = 'omega3'

type prebiotic = 'prebiotic'

type probiotic = 'probiotic'

type antioxidant = 'antioxidan'

type microNutrient = vitamin | mineral | aminoacid | omega3 | prebiotic | probiotic | antioxidant

type wealthRange = 0 | 1 | 2 | 3 | 4 | 5

type macroProperty = {name : macroNutrient, wealth: wealthRange}

type microProperty = {name : microNutrient, wealth: wealthRange}

type moreInfo = {[key: string] : string}
