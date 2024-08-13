import {Navigate, Route, Routes} from 'react-router-dom';
import './index.css'

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Course } from './pages/Course';
import { Contact } from './pages/Contact';
import { CourseDetails } from './pages/CourseDetails';



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
                    path='/courses'
                    element={<Course/>}
                />
                <Route
                    path='/contact'
                    element={<Contact/>}
                />
                <Route
                    path='/course-details'
                    element={<CourseDetails/>}
                />  
                <Route path='/' element={<Navigate to='/home' replace/>}/>
            </Routes>
        </>
    );
}

export default App;