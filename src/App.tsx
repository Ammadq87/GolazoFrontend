import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home';

function App() {

  return (
    <>
      <Router>
        <div className="flex flex-row">
          <div className='w-screen h-screen flex'>
            <Navbar />
            <div id="main_content" className="h-screen w-full">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth'>
                  <Route path='login' />
                  <Route path='register' />
                </Route>
                <Route path='/feed' />
                <Route path='/task' />
                <Route path='/account' />
                <Route path='/find' />
              </Routes>
            </div>
          </div>
          <Toaster position="bottom-right"
            reverseOrder={false} />
        </div>
      </Router>
    </>
  )
}

export default App
