// import Top from "./img/card-left.jpg"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import AddPost from "./pages/AddPost";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/signin" element={<AuthPage />}/> 
        <Route path="/addpost" element={<AddPost />}/> 
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
