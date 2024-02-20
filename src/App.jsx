import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import About from './components/About';
import Header from './components/Header';
import Homepage from './components/Homepage';
import PostView from './components/PostView';
import Projects from './components/Projects';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/post/:id" element={<PostView/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
