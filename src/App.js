import { Navbar } from "./components/navbar/Navbar";
import { InitialPage } from "./components/initialPage/InitialPage";
import { Footer } from "./components/footer/Footer";
import { Container } from "./components/container/Container";

function App() {
	return (
		<>
			<Navbar />
			<Container>
				<InitialPage />
			</Container>
			<Footer />
		</>
	);
}

export default App;
