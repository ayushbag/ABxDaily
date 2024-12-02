import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import BlogsPage from "./pages/BlogsPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="/blogs/:title" element={<BlogsPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
