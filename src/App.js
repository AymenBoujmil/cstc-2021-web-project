import './App.css';
import { navbar as Navbar } from './components/navbar/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { banner as Banner } from './components/heroBanner/banner.js';

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Banner></Banner>
		</div>
	);
}

export default App;
