import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signupage";

import {Routes,  Route, BrowserRouter} from 'react-router-dom';
import PrivateRoute from "./auth/PrivateRoute";
import Userdashboard from "./pages/Userdashboard";
import AdminDashboard from "./pages/admindashboard/AdminDashboard";

import Admincategory from "./pages/admindashboard/Admincategory";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Loginpage/>} />
    <Route path="/signup" element={<Signuppage/>} />
    <Route path="/user-dashboard" element={<PrivateRoute><Userdashboard/></PrivateRoute>} />

    {/* admin routes */}
    <Route path="/admin-dashboard" element={<PrivateRoute><AdminDashboard/></PrivateRoute>} />
    <Route path="category" element={<PrivateRoute><Admincategory/></PrivateRoute>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
