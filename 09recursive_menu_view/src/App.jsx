import MenuList from "./MenuList"
import './App.css'


function App({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  )
}

export default App