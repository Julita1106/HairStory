import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { history } from "util/util";
import { Navbar } from "./components/navbar/Navbar";
import { InitialPage } from "./components/initialPage/InitialPage";
import { Footer } from "./components/footer/Footer";
import { Container } from "./components/container/Container";
import { QuizPage } from "./components/quizPage/QuizPage";
import { PlanPage } from "./components/planPage/PlanPage";

function App() {
	return (
		<>
			<Navbar />
			<Container>
				<Router history={history}>
					<Switch>
						<Route path='/' exact component={InitialPage} />
						<Route path='/:userId/quiz' component={QuizPage} />
						<Route path='/:userId/plan' component={PlanPage} />
					</Switch>
				</Router>
			</Container>
			<Footer />
		</>
	);
}

export default App;
