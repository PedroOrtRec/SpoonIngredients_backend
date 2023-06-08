export interface Food {
  id: number,
  names: Names,
  category: Category,
  macros: MacroProperty[],
  micros: MicroProperty[],
  allergens: Allergens[] | null,
  vegan: boolean,
  info: string,
  img: string,
  moreInfo: moreInfo | null
}

export enum Category {
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

export enum MacroNutrient {
protein = 'protein',
lipid = 'lipid',
glucid = 'glucid'
}

export enum Vitamin {
  vitaminA = 'vitamin A',
  vitaminB = 'vitamin B',
  vitaminC = 'vitamin C',
  vitaminD = 'vitamin D',
  vitaminE = 'vitamin E',
  vitaminK = 'vitamin K',

}

export enum Mineral {
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

export enum AminoAcid {
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

export enum Allergens {
  gluten = 'gluten',
  peanuts = 'peanuts',
  treeNuts = 'tree Nuts',
  celery = 'celery',
  mustard = 'mmustard',
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

type Names = {en: string, es: string, fr: string}

type Omega3 = 'omega3'

type Prebiotic = 'prebiotic'

type Probiotic = 'probiotic'

type MicroNutrient = Vitamin | Mineral | AminoAcid | Omega3 | Prebiotic | Probiotic

type WealthRange = 0 | 1 | 2 | 3 | 4 | 5

type MacroProperty = {name : MacroNutrient, wealth: WealthRange}

type MicroProperty = {name : MicroNutrient, wealth: WealthRange}

type moreInfo = {[key: string] : string}
