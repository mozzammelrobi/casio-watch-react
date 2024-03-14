
import { useEffect } from 'react'
import './App.css'
import Watches from './Watches'
import { useState } from 'react'
import Cart from './Cart'

function App() {

  const [watches, setWatches] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('./watches.json')
      .then(res => res.json())
      .then(data => {
        setWatches(data)
        // console.log(data)
      })
  }, [])

  const addToCart = (watch) => {
    const isExist = cart.find(card => card.id == watch.id)
    // console.log(isExist)
    if (!isExist) {
      const newCart = [...cart, watch]
      setCart(newCart)
    }
    else{
      alert('laready exist')
    }

  }

  const removeCart = (id) => {
    console.log('remoce card', id)
    const item = cart.filter((card) => card.id !== id)
    console.log(item)
    setCart(item)
  }

  return (
    <div className='container mx-auto  p-5'>
      <div className='flex'>
        <div className='w-2/3  grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            watches.map((watch, idx) => <Watches key={idx} addToCart={addToCart} watch={watch}></Watches>)
          }

        </div>
        <div className=' w-2/6 '>

          <Cart
            cart={cart}
            removeCart={removeCart}
          ></Cart>

        </div>
      </div>
    </div>

  )
}

export default App
