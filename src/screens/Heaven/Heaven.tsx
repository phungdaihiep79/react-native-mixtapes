import React, { FC } from 'react'

import { useRoute, RouteStack } from '@navigation'
import { View, Text, StyleSheet } from 'react-native'

type Demo2Props = {}

export const Heaven: FC<Demo2Props> = () => {
  const {
    params: { angels },
  } = useRoute<RouteStack<'Heaven'>>()

  return (
    <View style={style.root}>
      <Text>{angels} living here</Text>
    </View>
  )
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
