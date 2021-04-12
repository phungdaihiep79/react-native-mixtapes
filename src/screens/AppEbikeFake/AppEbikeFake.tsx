import React, { FC } from 'react'

import { makeStyles } from '@theme'
import { View, Text } from 'react-native'

export type AppEbikeFakeProps = {}

export const AppEbikeFake: FC<AppEbikeFakeProps> = (props) => {
  const style = useStyles(props)

  return (
    <View style={style.root}>
      <Text>AppEbikeFake screen</Text>
    </View>
  )
}

const useStyles = makeStyles<AppEbikeFakeProps>()(() => ({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
