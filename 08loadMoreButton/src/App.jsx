import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  const [products, setproducts] = useState([])
  const [count, setCount] = useState(0)
  const [disable, setDisable] = useState(false)

  async function fetchProducts() {
    try {
      setLoading(true)
      const skip = count === 0 ? 0 : count * 20;
      console.log('Fetching products with skip:', skip);
      const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}&random=${Math.random()}`)
      const result = await res.json()
      console.log('API Response:', result);
      if (result && result.products && result.products.length) {
        setproducts((prevData) => prevData.concat(result.products))
      }
      setLoading(false)
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [count])

  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true)
    }
  }, [products])

  if (loading) {
    return <div>Loading data... Please wait !!!</div>
  }

  return (
    <div className='container'>
      <div className='product-container'>
        {
          products && products.length ?
            products.map((item, index) =>
              <div key={index} className='product'>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            )
            : null
        }
      </div>
      <div className='button-container'>
        <button disabled={disable} onClick={() => setCount(count + 1)}>Load More Products</button>
        {
          disable ? <p>You have reached maximum limit</p> : null
        }
      </div>
    </div>
  )
}

export default App
