import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import About from './components/About';
import Header from './components/Header';
import Homepage from './components/Homepage';


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
