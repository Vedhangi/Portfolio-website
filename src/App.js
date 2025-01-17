
import './App.css';
import Header from './components/Header'
import Objective from './components/Objective';
import Experience from './components/Exprince';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Project';
import Courses from './components/Courses';


function App() {
  return (
    <div className="app-container">
      <Header />
      <div className='container'>
       <Objective />
       <Skills />
       </div>
       <Education />
       <Experience />
       <div className='container'>
      <Projects />
      <Courses />
      </div>
      
    </div>
  );
}

export default App;




