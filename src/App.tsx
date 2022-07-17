import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Wrapper } from './components/Wrapper/Wrapper'
import { Home } from './pages/Home/Home'

export function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/presentation' element={<div />} />
        <Route path='/facilities' element={<div />} />
        <Route path='/rates' element={<div />} />
        <Route path='/gallery' element={<div />} />
        <Route path='/contact' element={<div />} />
      </Routes>
    </Wrapper>
  )
}
