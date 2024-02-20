import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import menus from './data.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div  className='menu-list-container'>
    <App menus={menus} />
  </div>,
)
