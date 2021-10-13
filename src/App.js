import { BrowserRouter, Route } from "react-router-dom"
import Navbar from './components/layouts/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/layouts/Footer'
import Blogdetails from './components/projects/Blogdetails'
import Createblog from "./components/projects/Createblog"
import Login  from "./components/auth/Login"
import Signup  from "./components/auth/Signup"
import Home from "./components/layouts/Home"


function App() {
  return (
    <BrowserRouter > 
    <div className="App bg-gray-900 h-auto w-full pb-10 pt-0">
    <Navbar />
    <Route exact path='/Dashboard' component ={ Dashboard } />
    <Route exact path='/Login' component ={ Login } />
    <Route exact path='/Signup' component ={ Signup } />
    <Route exact path='/' component ={ Home } />
    <Route exact path='/Create' component ={ Createblog } />
    <Route exact path='/posts:id' component ={ Blogdetails } />
    <Footer />
    </div>

    </BrowserRouter>
  );
}

export default App;
