import React, { FC, useCallback } from 'react'

import { HeavenParams, HellParams, useNavigation } from '@navigation'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

type HomeProps = {}

export const Home: FC<HomeProps> = () => {
  const navigation = useNavigation()

  const onNavigateToHell = useCallback(
    (demons: HellParams) => navigation.navigate('Hell', { demons }),
    [navigation],
  )

  const onNavigateToHeaven = useCallback(
    (angels: HeavenParams) => navigation.navigate('Heaven', { angels }),
    [navigation],
  )

  return (
    <View style={style.root}>
      <TouchableOpacity onPress={() => onNavigateToHeaven('cassiel')}>
        <Text>Heaven</Text>
      </TouchableOpacity>
      <Text>Choose your way :))</Text>
      <TouchableOpacity onPress={() => onNavigateToHell('leviathan')}>
        <Text>Hell</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})
