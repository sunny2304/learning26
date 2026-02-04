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
import { PageNotFound } from './PageNotFound'
import { Watch } from './components/Watch'
import { IplTeam } from './components/IplTeam'
import { IplDetails } from './components/IplDetails'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      {/* <Navbar></Navbar>
      <Routes> 
        <Route path='/' element={<NetflixHome></NetflixHome>}></Route>
        <Route path='/movies' element={<NetflixMovies></NetflixMovies>}></Route>
        <Route path="/shows" element={<NetflixShows></NetflixShows>}></Route>
        <Route path='/anime' element={<NetflixAnime></NetflixAnime>}></Route>
        <Route path='/popular' element={<NetflixPopular></NetflixPopular>}></Route>
        <Route path='/watch/:name' element={<Watch></Watch>}></Route>
        <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>  */}

<Routes>
  <Route path="/" element={<IplTeam />} />
  <Route path="/ipldetails/:name" element={<IplDetails />} />
</Routes>
 
      
    </div>
  )

}

export default App
