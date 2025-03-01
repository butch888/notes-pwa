import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import { Notes } from './components/index'
import { SignIn } from './components/index'
import { AuthProvider } from './provider/AuthPrivider'
import PrivateRoute from './services/PrivateRoute'

function App() {
  return (
    <div className='app'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route element={<PrivateRoute />}>
            <Route path='/' element={<Notes />} />
            </Route>
            <Route path='signin' element={<SignIn />} />
          </Route>
        </Routes>
      </AuthProvider>
      
    </div>
  )
}

export default App
