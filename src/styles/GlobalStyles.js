import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}
body {
	font-family: sans-serif;
	margin: 0;
	height: 100vh;
	background-color: ${({ dark }) => (dark ? '#1D1F29' : 'white')};
}
h1 {
	margin-top: 0;
	font-size: 1.4rem;
}
h2 {
	font-size: 1.3rem;
}
`;

export { GlobalStyle };
