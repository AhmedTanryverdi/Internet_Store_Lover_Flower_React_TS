import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./widgets/header/Header";
import { Footer } from "./widgets/footer/Footer";

const App: React.FC = (): React.JSX.Element => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
