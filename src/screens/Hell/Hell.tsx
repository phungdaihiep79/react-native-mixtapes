import React, { FC, useCallback } from 'react'

import { useNavigation } from '@navigation'
import { makeStyles } from '@theme'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import images from '../../assets/images'

const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get('screen')

export type HellProps = {}

type AnimatedGHContext = {
  startX: number
  startY: number
}

export const Hell: FC<HellProps> = (props) => {
  const styles = useStyles(props)
  const navigation = useNavigation()

  const translation = {
    y: useSharedValue(-480),
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translation.y.value }],
    }
  })

  const handleNavigateToHell2 = useCallback(() => {
    navigation.navigate('Hell2')
  }, [navigation])

  const handlePanGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_, ctx) => {
      // ctx.startX = translation.x.value
      ctx.startY = translation.y.value
    },
    onActive: (event, ctx) => {
      translation.y.value = ctx.startY + event.translationY
    },
    onEnd: (event, _) => {
      const { absoluteY } = event
      if (absoluteY < MAX_HEIGHT * 0.85) {
        translation.y.value = withSpring(-480)
      }
    },
  })

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <PanGestureHandler onGestureEvent={handlePanGesture}>
          <Animated.View style={[styles.image, animatedStyle]}>
            <View style={styles.space} />
            <View style={styles.footHeader}>
              <Image style={styles.cover} source={images.coverBg} />
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
      <TouchableOpacity
        style={[styles.verticalContainer, styles.body]}
        onPress={handleNavigateToHell2}
      >
        <Text style={styles.content}>Nhấp</Text>
        <Text style={styles.content}>Em</Text>
        <Text style={styles.content}>Đi</Text>
      </TouchableOpacity>
    </View>
  )
}

const useStyles = makeStyles<HellProps>()(({ font, colors }) => ({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {},
  body: {},
  cover: {
    width: MAX_WIDTH,
    height: 200,
    bottom: 0,
  },
  content: {
    fontSize: font.size.h6,
    alignSelf: 'center',
  },
  image: {
    zIndex: 1000,
    height: MAX_HEIGHT * 0.8,
    backgroundColor: colors.danger,
  },
  space: {
    flex: 8,
  },
  footHeader: {
    flex: 1,
  },
}))
