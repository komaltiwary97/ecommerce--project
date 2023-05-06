import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signupage";
import {Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Loginpage/>} />
    <Route path="/signup" element={<Signuppage/>} />
      
    </Routes>
  );
}

export default App;
