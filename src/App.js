import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { navbar as Navbar } from './components/navbar/navbar';
import { banner as Banner } from './components/heroBanner/banner';
import { footer as Footer } from './components/footer/footer';


function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Banner></Banner>
			<Footer></Footer>
		</div>
	);
}

export default App;
