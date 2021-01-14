import React, { FC } from 'react'

import { RouteStack, useRoute } from '@navigation'
import { View, Text, StyleSheet } from 'react-native'

type DemoProps = {}

export const Hell: FC<DemoProps> = () => {
  const {
    params: { demons },
  } = useRoute<RouteStack<'Hell'>>()

  return (
    <View style={style.root}>
      <Text>{demons} living here</Text>
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
