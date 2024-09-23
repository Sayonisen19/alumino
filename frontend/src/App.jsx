// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signout from './components/Signout';
import Chat from './components/Chat';
import WebinarList from './components/WebinarList';
import Community from './components/Community';
import ProfileUpdate from './components/ProfileUpdate';
import ProjectSubmission from './components/ProjectSubmission';
import JobPosting from './components/JobPosting';
import Search from './components/Search';
import Notifications from './components/Notifications';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/signin" element={<Signin/>} />
                    <Route path="/signout" element={<Signout/>} />
                    <Route path="/chat" element={<Chat/>} />
                    <Route path="/webinars" element={<WebinarList/>} />
                    <Route path="/community" element={<Community/>} />
                    <Route path="/profile" element={<ProfileUpdate/>} />
                    <Route path="/project" element={<ProjectSubmission/>} />
                    <Route path="/job" element={<JobPosting/>} />
                    <Route path="/search" element={<Search/>} />
                    <Route path="/notifications" element={<Notifications/>} />
                    <Route path="/" exact element={<Home/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
