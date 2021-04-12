export type HellParams =
  | 'lucifer'
  | 'lilith'
  | 'mammon'
  | 'asmodeus'
  | 'leviathan'

export type HeavenParams = 'michael' | 'dina' | 'gabriel' | 'ariel' | 'cassiel'

export type AppStackParamsList = {
  Home?: {}
  Hell: {
    demons: HellParams
  }
  Heaven: {
    angels: HeavenParams
  }
  AppEbikeFake?: {}
}
