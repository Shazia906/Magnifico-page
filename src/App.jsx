
import './index.css';
import Navbar from './components/Nav';
import ProjectsSection from './components/ProjectsSection';
import WorkingSection from './components/WorkingSection';
import ToolsSection from './components/ToolsSection';
import WorkFlowSection from './components/WorkFlowSection';
import Problems from './components/Problems';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  return(
   <div>
   <Navbar/>
   <ProjectsSection/>
   <WorkingSection/>
   <ToolsSection/>
   <Problems/>
   <WorkFlowSection/>
   <CommunitySection/>
   <Footer/>
   </div>
  )
  
}

export default App
