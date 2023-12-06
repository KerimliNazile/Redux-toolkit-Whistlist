import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Wislist from './Features/Wishlist/Wislist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Provider store={store}>
      <div>
        <Wislist/>
      </div>
     </Provider>
    </>
  )
}

export default App
