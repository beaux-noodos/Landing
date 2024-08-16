import {Navigate, Route, Routes} from 'react-router-dom';
import './index.css'

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';
import { ProjectDetails } from './pages/ProjectDetails';



function App() {
    return (
        <>
            <Routes>
                <Route
                    path='/home'
                    element={<Home/>}
                />
                <Route
                    path='/about-us'
                    element={<About/>}
                />
                <Route
                    path='/projects'
                    element={<Project/>}
                />
                <Route
                    path='/contact'
                    element={<Contact/>}
                />
                <Route
                    path='/project-details'
                    element={<ProjectDetails/>}
                />  
                <Route path='/' element={<Navigate to='/home' replace/>}/>
            </Routes>
        </>
    );
}

export default App;