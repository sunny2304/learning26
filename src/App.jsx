import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { NetflixHome } from './components/NetflixHome'
import { NetflixShows } from './components/NetflixShows'
import { NetflixMovies } from './components/NetflixMovies'
import { NetflixAnime } from './components/NetflixAnime'
import { NetflixPopular } from './components/NetflixPopular'
import { MapDemo5 } from './components/MapDemo5'
import { MapDemo6 } from './components/MapDemo6'
import { PageNotFound } from './components/PageNotFound'
import { Watch } from './components/Watch'
import { IplTeam } from './components/IplTeam'
import { IplDetails } from './components/IplDetails'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { FunctionDemo1 } from './components/FunctionDemo1'
import { EmployeeComponent } from './components/EmployeeComponent'
import { InputEvent } from './components/InputEvent'
import { InputTask } from './components/InputTask'
import { FormDemo1 } from './components/forms/FormDemo1'
import { FormTask1 } from './components/forms/FormTask1'
import { FormTask2 } from './components/forms/FormTask2'
import { FormTask3 } from './components/forms/FormTask3'
import { InputTask1 } from './components/InputTask1'
import { DependentDropdown } from './components/DependentDropdown'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
    <DependentDropdown/>
    </div>
  )

}

export default App
