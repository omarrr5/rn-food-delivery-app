import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function _layout() {
  return (
    <View>
      <Text className='mt-5'>Audfdsfdfsdfsdth Layout</Text>
      <Slot />
    </View>
  )
}