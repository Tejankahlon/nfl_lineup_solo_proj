import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import DisplayTeams from './components/DisplayTeams'
import ViewTeam from './components/ViewTeam'
import CreateTeam from './components/CreateTeam'

function App() {

  return (
    <div>
          <BrowserRouter>
            <Routes>
              <Route index element = {<DisplayTeams/>}/>
              <Route path="/createTeam" element = {<CreateTeam/>}/>
              <Route path="/viewTeam/:id" element = {<ViewTeam/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App