import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./widgets/footer/Footer";
import { HeaderContainer } from "./widgets/header/HeaderContainer";

const App: React.FC = (): React.JSX.Element => {
	return (
		<>
			<HeaderContainer />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
