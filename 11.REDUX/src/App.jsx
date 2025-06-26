import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/counterSlice'


function App() {
  const dispatch = useDispatch()
  const { value } = useSelector((store) => store.counter)
  console.log(value)
  return (

    <div>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  )
}

export default App
