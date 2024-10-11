import AboutMe from "./AboutMe";
import Header from "./Header";
import Presentation from "./Presentation";
import { Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_,i)=>(
          <div 
          key={i}
          className="absolute bg-teal-200 rounded-full"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 +0.5,
          }}
          >
          </div>
        ))}
      </div>
        <Header/>
      <div className="content w-full max-w-screen-xl mx-auto flex-grow">
        <Routes>
          <Route path="/" element={<Presentation/>}/>
          <Route path="/about" element = {<AboutMe/>}/>
        </Routes>
      </div>
      <footer className="bg-slate-800 text-center py-2">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Daniel Lizarazo.</p>
        </div>
      </footer>
    </div>
  )
}

export default App