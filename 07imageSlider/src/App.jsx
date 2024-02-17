import { useState, useEffect } from 'react'
import './App.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

function App({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchImages(getUrl) {
    try {
      const res = await fetch(`${getUrl}?page=1&limit=${limit}`)
      const data = await res.json()
      if (data) {
        setImages(data)
        setLoading(false)
      }

    } catch (error) {
      setErrorMsg(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (url !== '') {
      fetchImages(url)
    }
  }, [url])

  if (loading) {
    return <div>Loading data... Please Wait !</div>
  }

  if (errorMsg) {
    return <div>Error occured ! {errorMsg}</div>
  }

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <div className='container'>
      <h1 className='heading'>Image Slider</h1>
      <BsArrowLeftCircleFill onClick={handlePrev} className='arrow arrow-left' />
      {
        images && images.length ?
          images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
          ))
          : null
      }
      <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
      <span className='circle-indicators'>
        {
          images && images.length ?
            images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index ? "current-indicator" : "current-indicator hidden-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              >
              </button>
            ))
            : null
        }
      </span>
    </div>
  )
}

export default App
