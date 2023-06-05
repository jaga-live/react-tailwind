import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Hero from './components/Hero';

function App() {
	return (
		<div>
			<Topbar />
			<Navbar />
			<Hero />
		</div>
	);
}

export default App;
