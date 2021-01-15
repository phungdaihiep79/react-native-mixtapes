import React, { FC, useCallback } from 'react'

import { HeavenParams, HellParams, useNavigation } from '@navigation'
import { makeStyles } from '@theme'
import { Text, TouchableOpacity, View } from 'react-native'
type HomeProps = {}

export const Home: FC<HomeProps> = (props: HomeProps) => {
  const navigation = useNavigation()

  const style = useStyle(props)

  const onNavigateToHell = useCallback(
    (demons: HellParams) => navigation.navigate('Hell', { demons }),
    [navigation],
  )

  const onNavigateToHeaven = useCallback(
    (angels: HeavenParams) => navigation.navigate('Heaven', { angels }),
    [navigation],
  )

  return (
    <View style={style.verticalContainer}>
      <TouchableOpacity onPress={() => onNavigateToHeaven('cassiel')}>
        <Text>Heaven</Text>
      </TouchableOpacity>
      <Text style={style.text}>Choose your way :))</Text>
      <TouchableOpacity onPress={() => onNavigateToHell('leviathan')}>
        <Text>Hell</Text>
      </TouchableOpacity>
    </View>
  )
}

const useStyle = makeStyles<HomeProps>()(({ font }) => ({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: font.size.h3,
  },
}))
