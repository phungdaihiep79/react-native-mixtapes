import { StyleSheet } from 'react-native'

export const baseStyle = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export type BaseStyle = typeof baseStyle
