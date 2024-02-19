import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  const [products, setproducts] = useState([])
  const [count, setCount] = useState(0)

  async function fetchProducts() {
    try {
      setLoading(true)
      const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
      const result = await res.json()
      if (result && result.products && result.products.length) {
        setproducts(result.products)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchProducts()
  })

  if (loading) {
    return <div>Loading data... Please wait !!!</div>
  }

  return (
    <div className='container'>
      <div className='product-container'>
        {
          products && products.length ?
            products.map(item =>
              <div key={item.id}>
                <img className='product' src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            )
            : null
        }
      </div>
      <div className='button-container'>
        <button>Load More product</button>
      </div>
    </div>
  )
}

export default App
