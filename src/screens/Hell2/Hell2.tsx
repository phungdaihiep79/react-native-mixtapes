import React, { FC } from 'react'

import { makeStyles } from '@theme'
import { View, Text } from 'react-native'

export type Hell2Props = {}

export const Hell2: FC<Hell2Props> = (props) => {
  const style = useStyles(props)

  return (
    <View style={style.root}>
      <Text>Hell2 screen</Text>
    </View>
  )
}

const useStyles = makeStyles<Hell2Props>()(() => ({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
