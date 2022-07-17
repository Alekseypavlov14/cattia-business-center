import { Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<div />} />
        <Route path='/presentation' element={<div />} />
        <Route path='/facilities' element={<div />} />
        <Route path='/rates' element={<div />} />
        <Route path='/gallery' element={<div />} />
        <Route path='/contact' element={<div />} />
      </Routes>
    </>
  )
}
