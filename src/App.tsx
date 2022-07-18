import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/presentation' element={<div />} />
        <Route path='/facilities' element={<div />} />
        <Route path='/rates' element={<div />} />
        <Route path='/gallery' element={<div />} />
        <Route path='/contact' element={<div />} />
      </Routes>
      <Footer />
    </>
  )
}
