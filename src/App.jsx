import Header from './components/header/Header';
import Main from './components/main/Main';
import { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
	const [dark, setDark] = useState(false);
	return (
		<>
			<GlobalStyle dark={dark} />

			<Header dark={dark} setDark={setDark} />
			<Main dark={dark} />
		</>
	);
};

export default App;
