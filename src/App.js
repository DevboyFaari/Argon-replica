import './App.css';
import Dashboard from './dashboard';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import DashboardComponent from "./DashboardComponent";
import MapContainer from './MapContainer';
import Icons from './Icons';
import UserProfile from './UserProfile';
import Tables from './Tables';

function App() {
  return (
   
    <Router>
    <Dashboard />
    
      <Routes>
        <Route exact path='/index' element={< DashboardComponent />} />
        <Route exact path='/maps' element={< MapContainer/> } />
        <Route exact path='/icons' element={< Icons/> } />
        <Route exact path='/user-profile' element={< UserProfile/> } />
        <Route exact path='/tables' element={< Tables/> } />
      </Routes>
     
      
    </Router>

    
    
  
  );
}

export default App;
