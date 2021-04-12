import React, { FC, useCallback } from 'react'

import { HellParams, useNavigation } from '@navigation'
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

  const onNavigateToAppEbike = useCallback(() => {
    navigation.navigate('AppEbikeFake')
  }, [navigation])

  return (
    <View style={style.verticalContainer}>
      <TouchableOpacity onPress={onNavigateToAppEbike}>
        <Text>Test RTK & Redux saga</Text>
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
