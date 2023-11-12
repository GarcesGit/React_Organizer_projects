import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Tasks from './pages/Tasks';
import About from "./pages/About";
import Navbar from './components/UI/Navbar/Navbar';


function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="*" element={<Navigate to="/tasks" />} />
				<Route path="/tasks" element={<Tasks />} />
				<Route path="/about" element={<About />} />
			</Routes>

		</BrowserRouter>
	)
}

export default App;
