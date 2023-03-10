import styled from 'styled-components';

const CardView = styled.div`
	width: 100%;
	height: 100px;
	border-radius: 0.5rem;
	padding: 2rem;
	background-color: ${({ dark }) => (dark ? '#252B42' : '#f1f3fa')};
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
	color: ${({ dark }) => (dark ? 'white' : '#black')};
`;
const CardViewNumber = styled.p`
	font-size: 2rem;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 0;
`;
const CardPorcent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	height: 70px;
`;
export { CardView, CardPorcent, CardViewNumber };
