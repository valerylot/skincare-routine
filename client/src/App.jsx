import './App.css'
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './views/Home';
import ReadOne from './views/ReadOne';
import Create from './views/Create';
import Update from './views/Update';
import Products from './views/Products';

function App() {

  return (
    <>
      {/* set up routes */}
      <Routes>
        <Route path="/routines" element={<Navigate to="/" />} />
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* CREATE PAGE */}
        <Route path="/create" element={<Create />} />

        {/* SHOW ONE PAGE */}
        <Route path="/routines/:id" element={<ReadOne />} />

        {/* UPDATE PAGE */}
        <Route path="/routines/:id/update" element={<Update />} />

        {/* PRODUCTS PAGE */}
        <Route path="/routines/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App