import './App.css'
import { Routes, Route, Link, useParams, Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom'
import NavLink from './NavLink'
import { useAuth } from './useAuth'

const Home = () => {
  return <h1>Home</h1>
}

const Mobile = () => {
  const { name } = useParams()
  return (
    <div>
      <h1>Mobile: {name}</h1>
      <Link to='details'>Go to Details</Link>
      <Outlet />
    </div>
  )
}

const MobileDetails = () => {
  const { name } = useParams()
  return (
    <h3>Details: {name}</h3>
  )
}

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleClick = () => {
    login()
    navigate(state?.location?.pathname ?? '/')
  }

  return <button onClick={handleClick}>Login</button>
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ location }} />
  }
  return children
}

const SearchPage = () => {
  const mobile = [
    'Motorola',
    'Huawei',
    '¡Phone',
    'Samsung',
    'Xiaomi'
  ]
  return (
    <div>
      <h1>Search page</h1>
      <ul>
        {mobile.map(brand => (
            <li key={brand}><Link to={`/mobile/${brand}`}>{brand}</Link></li>
        ))}
      </ul>
    </div>
  )
}

function App () {
  return (
    <div className="App">

      <header>
        <h1>Market Router 💵</h1>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<ProtectedRoute><SearchPage /></ProtectedRoute>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/mobile/:name' element={<ProtectedRoute><Mobile /></ProtectedRoute>}>
          <Route path='details' element={<MobileDetails/>} />
        </Route>
        <Route path='*' element={<h2>Not Found</h2>}/>
      </Routes>

    </div>
  )
}

export default App
