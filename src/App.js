import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout.jsx';
import Home from './pages/home.jsx';
import AboutUs from './pages/aboutus.jsx';
import Contact from './pages/contact.jsx';
import BoutiqueHotels from './features/boutiquehotels.jsx';
import DigitalPlatformsPage from './features/DigitalPlatformsPage';
import AiWeb3Page from './features/AiWeb3Page';
import GamesPage from './features/GamesPage';
import Fintech from './features/fintech';
import MarketingPage from './features/MarketingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './pages/signup.jsx'; 
import LogIn from './pages/login.jsx';
import ForgetPass from './pages/forgetpass.jsx';
import JoinUs from './pages/Joinus.jsx'; 
import Check from './pages/check.jsx';
import NewPassword from './pages/newpassword.jsx';



import FreelanceLayout from './layouts/freelancelayout.jsx';
import MainPage from './features/freelance/mainpage.jsx';

import FormFreelance from './features/freelance/formfreelance.jsx';
import FormTeemFree from './features/freelance/formteemfree.jsx';
import DetailsCards from './components/freelance/detailscard/detailscards.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* المسارات العادية تحت Layout العام */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="boutiquehotels" element={<BoutiqueHotels />} />
          <Route path="digital-platforms" element={<DigitalPlatformsPage />} />
          <Route path="ai-web3" element={<AiWeb3Page />} />
          <Route path="interactive-games" element={<GamesPage />} />
          <Route path="marketing-projects" element={<MarketingPage />} />
          <Route path="fintech" element={<Fintech />} />
        </Route>

          <Route path="JoinUs" element={<JoinUs />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="check-email" element={<Check />} />
          <Route path="forgetpass" element={<ForgetPass />} />
          <Route path="newpass" element={<NewPassword />} />

        {/* Layout خاص بالفريلانسر */}
        <Route path="/freelance" element={<FreelanceLayout />}>
          <Route index element={<MainPage />} />

          <Route path="FormFreelance" element={<FormFreelance />} />
          <Route path="FormTeemFree" element={<FormTeemFree />} />
          <Route path="DetailsCards" element={<DetailsCards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

