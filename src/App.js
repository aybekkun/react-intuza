
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseInner from "./pages/CourseInner";
import Markdown from "./pages/Markdown";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="course" element={<Course/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="courseinner" element={<CourseInner/>}/>
        <Route path="mark" element={<Markdown/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
