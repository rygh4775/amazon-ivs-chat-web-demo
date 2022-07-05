// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Chat from './chat/Chat';

function App() {
  return (
  <Router>  
    <div className="App full-width full-height">
      <Routes>
        <Route path="/health" element={<div>hello</div>} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
