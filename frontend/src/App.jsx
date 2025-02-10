import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <nav className='navbar'>
        <div className='container'>
        <h4>Article List</h4></div>
      </nav>
      <ArticleList/>
      <AddArticle />
      
    </>
  )
}

export default App
