import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'

const App = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
      </Stack>
    </>
  )
}

export default App