import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

import ChatRoom from './pages/ChatRoom';
import Home from './pages/Home';

//const socket = io('http://localhost:5005'); // Connect to the server




function App() {

 

return (
  <Router>
    <Routes>
      <Route path="/chat" element={<ChatRoom/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>
);
}

export default App;
