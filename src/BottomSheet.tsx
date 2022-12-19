import { Animated, Easing, Pressable, StyleSheet, useWindowDimensions, View, } from 'react-native'
import * as React from 'react'

const DEFAULT_HEIGHT = 300

const useAnimatedBottom = (show: boolean, height: number = DEFAULT_HEIGHT) => {
    const animatedValue = React.useRef(new Animated.Value(0))

    const bottom = animatedValue.current.interpolate({
        inputRange: [0, 1], 
        outputRange: [-height, 0],
    })

    React.useEffect(() => {
        if (show) {
          Animated.timing(animatedValue.current, {
            toValue: 1,
            duration: 350,
            // Accelerate then decelerate - ref: https://cubic-bezier.com/#.28,0,.63,1
            easing: Easing.bezier(0.28, 0, 0.63, 1),
            useNativeDriver: false, // 'bottom' is not supported by native animated module
          }).start()
        } else {
          Animated.timing(animatedValue.current, {
            toValue: 0,
            duration: 250,
            // Accelerate - ref: https://easings.net/#easeInCubic
            easing: Easing.cubic,
            useNativeDriver: false,
          }).start()
        }
      }, [show])
    
      return bottom

}

interface Props {
    children: React.ReactNode
    show: boolean
    height?: number
    onOuterClick?: () => void
  }

  export function BottomSheet({
    children,
    show,
    height = DEFAULT_HEIGHT,
    onOuterClick,
  }: Props) {
    const { height: screenHeight } = useWindowDimensions()
  
    const bottom = useAnimatedBottom(show, height)
  
    return (
      <>
        {/* Might remove later */}
        {show && (
          <Pressable
            onPress={onOuterClick}
            style={[styles.outerOverlay, { height: screenHeight }]}
          >
            <View />
          </Pressable>
        )}
        <Animated.View style={[styles.bottomSheet, { height, bottom }]}>
          {children}
        </Animated.View>
      </>
    )
  }
  
  const styles = StyleSheet.create({
    outerOverlay: {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      backgroundColor: 'black',
      opacity: 0.1,
    },
    bottomSheet: {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      backgroundColor: '#2A2836',
      borderRadius: 39,
    },
  })
