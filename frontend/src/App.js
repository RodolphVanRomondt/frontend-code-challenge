import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Admin';
import Homepage from './Homepage';
import NavBar from './NavBar';
import Profile from './Profile';
import UserRegistration from './UserRegistration';
import UserUpdate from './UserUpdate';
import PageNotFound from "./PageNotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/:id" element={<Profile />} />
          <Route path="/registration" element={<UserRegistration />} />
          <Route path="/update/:id" element={< UserUpdate />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
