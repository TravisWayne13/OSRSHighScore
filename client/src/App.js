
import React from 'react'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import StatDisp from './components/StatDisp'
import axios from 'axios'

const App = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <StatDisp />
    </>
  )
}

export default App