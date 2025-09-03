import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Auth, Home, Menu, Orders, Tables } from "./pages"
import Header from "./components/shared/Header"


const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/tables" element={<Tables/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
