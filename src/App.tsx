import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Router>
        <div className="flex flex-row h-screen">
          <div className='w-screen border border-red-500'>
            <div id="side_content" className="h-full w-48">
              <Navbar />
            </div>
            <div id="main_content">
              <Routes>
                <Route path='/' />
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
