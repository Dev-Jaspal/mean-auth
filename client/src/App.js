import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/sign-in" Component={SignIn}/>
        <Route path="/sign-up" Component={SignUp}/>
        <Route element ={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
