import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const clientId =
	"479237004423-ch80tkr3h0m0hpjhjn7gkkabkjha39rq.apps.googleusercontent.com";

export const getQuizResult = (answers) => {
	const aAnswers = answers.filter((answers) => answers.answerId === "a").length;
	const bAnswers = answers.filter((answers) => answers.answerId === "b").length;
	const cAnswers = answers.filter((answers) => answers.answerId === "c").length;

	if (aAnswers > (bAnswers && cAnswers)) {
		return "highporous";
	}

	if (bAnswers > (cAnswers && aAnswers)) {
		return "mediumporous";
	}

	if (cAnswers > (bAnswers && aAnswers)) {
		return "lowporous";
	}

	return "mediumporous";
};

export const resultDictionary = {
	highporous: {
		label: "Wysokoporowate",
		description: `Włosy wysokoporowate to włosy zniszczone, bowiem porowatość włosów
		odzwierciedla ich faktyczną kondycję. Jak wyglądają wysokoporowate
		włosy? Są słabe, łamliwe i suche. Mają tendencję do puszenia się i
		elektryzowania. Ważne jest, aby w ich pielęgnacji stosować odpowiednie
		kosmetyki i unikać czynników, które dodatkowo je osłabiają.`,
	},
	mediumporous: {
		label: "Średnioporowate",
		description: `Włosy średnioporowate to takie, które oscylują pomiędzy ciężkimi i
		grubymi włosami o niskiej porowatości, a mocno zniszczonymi i
		przesuszonymi. Jak wyglądają najczęściej takie włosy? Ich łuski są
		nieznacznie odchylone od łodygi (trzonu), zwykle nie sprawiają większych
		trudności w pielęgnacji, bywają podatne na układanie i stylizację, ale
		jednocześnie bardzo kapryśne i łatwo pogorszyć ich stan.`,
	},
	lowporous: {
		label: "Niskoporowate",
		description: `Są gładkie, lśniące, optymalnie nawilżone i sprężyste. Rzadko się puszą
		i elektryzują, nie mają tendencji do utraty wilgoci. Nie trzeba ich
		rozczesywać przez pół godziny jak w przypadku włosów zniszczonych i
		porowatych - wystarczy lekko przeczesać szczotką i są rozczesane. W
		ciągu dnia też nie plączą się w takim stopniu, jak włosy o podwyższonej
		porowatości. `,
	},
};
