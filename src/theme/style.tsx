import { useMemo } from 'react'

import keys from 'lodash.keys'
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { baseStyle, BaseStyle } from './baseStyle'
import { colors, Color } from './color'
import { font, Font } from './font'
import { normalize, Normalize } from './nomalize'

export type Theme = {
  font: Font
  colors: Color
  normalize: Normalize
}

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle
}

type NamedStylesFn<Props extends {}, T> = {
  [P in keyof T]:
    | ((args: Props) => ViewStyle | TextStyle | ImageStyle)
    | ViewStyle
    | TextStyle
    | ImageStyle
}

type StyleThemFn<
  Props extends {},
  T extends NamedStyles<T> | NamedStyles<any> | NamedStylesFn<Props, T>
> = (args: Theme) => T | NamedStyles<any> | NamedStylesFn<Props, T>

type ReturnNameStyled<T, P> = T & P

const createStyle = (styles: any, props?: any) => {
  return keys(styles).reduce((results, key) => {
    if (typeof styles[key] === 'function') {
      results[key] = styles[key](props)
    } else {
      results[key] = styles[key]
    }
    return results
  }, {} as any)
}

export const makeStyles = <Props extends {}>() => <
  T extends NamedStyles<T> | NamedStyles<any> | NamedStylesFn<Props, T>
>(
  styles: StyleThemFn<Props, T> | T | NamedStyles<T> | NamedStylesFn<Props, T>,
) => {
  return (props?: Props) => {
    return useMemo<
      {
        [P in keyof ReturnNameStyled<T, BaseStyle>]: {}
      }
    >(
      () =>
        StyleSheet.create({
          ...baseStyle,
          ...createStyle(
            typeof styles === 'function'
              ? styles({
                  colors,
                  font,
                  normalize,
                })
              : styles,
            props,
          ),
        }),
      [props],
    )
  }
}
