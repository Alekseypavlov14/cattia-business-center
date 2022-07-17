import { Route, Routes } from 'react-router-dom'
import { Wrapper } from './components/Wrapper/Wrapper'

export function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<div />} />
        <Route path='/presentation' element={<div />} />
        <Route path='/facilities' element={<div />} />
        <Route path='/rates' element={<div />} />
        <Route path='/gallery' element={<div />} />
        <Route path='/contact' element={<div />} />
      </Routes>
    </Wrapper>
  )
}
