import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./widgets/footer/Footer";
import { HeaderContainer } from "./widgets/header/HeaderContainer";
import { Provider } from "react-redux";
import { store } from "../store";


const App: React.FC = (): React.JSX.Element => {
	return (
		<Provider store={store}>
			<HeaderContainer />
			<Outlet />
			<Footer />
		</Provider>
	);
};

export default App;
