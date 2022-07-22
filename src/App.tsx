import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Facilities } from './pages/Facilities/Facilities'
import { Contacts } from './pages/Contacts/Contacts'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/presentation' element={<div />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  )
}
