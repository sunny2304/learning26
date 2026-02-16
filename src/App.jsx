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
import { FormValidation } from './components/forms/FormValidation'
import { Students } from './components/Students'
import { FormDemo5 } from './components/forms/FormDemo5'
import { StudentsDetails } from './components/StudentsDetails'
import { StudentsTable } from './components/StudentsTable'
import { FormValidation2 } from './components/forms/FormValidation2'
import { FormValidation3 } from './components/forms/FormValidation3'
import { FormTask4 } from './components/forms/FormTask4'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
     {/* <DependentDropdown/> */}
     <FormTask4/>
    </div>
  )

}

export default App
