import { Button } from 'react-native'
import Counter from './src/components/Counter'
import Loader from './src/components/Loader'
import List from './src/components/List'
import { useState } from 'react'
import DisplayAnImage from './src/components/DisplayImage'
import BackgroundImage from './src/components/BackgroundImage'
import CustomModal from './src/components/CustomModal'
import PressableComponent from './src/components/Pressable'
import CustomStatusBar from './src/components/CustomStatusBar'
import CustomForm from './src/components/CustomForm'
const App = () => {
  const [counter, setCounter] = useState<number>(0)
  return (
    <>
      <Button
        onPress={() => {
          setCounter(counter + 1)
        }}
        title="Increment"
        color="#841584"
      />
      <Button
        onPress={() => {
          setCounter(counter > 0 ? counter - 1 : 0)
        }}
        title="Decrement"
        color="#841584"
      />
      {counter === 0 ? <Counter /> : counter === 1 ? <Loader /> : counter === 2 ? <List /> : counter === 3 ? <DisplayAnImage /> : counter === 4 ? <BackgroundImage /> : counter === 5 ? <CustomModal /> : counter === 6 ? <PressableComponent /> : counter === 7 ? <CustomStatusBar /> : <CustomForm />}
    </>
  )
}
export default App