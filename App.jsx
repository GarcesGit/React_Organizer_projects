import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='*' element={<Navigate to='/projects' />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
