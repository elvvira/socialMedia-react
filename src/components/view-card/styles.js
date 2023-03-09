import styled from 'styled-components';

const StyledView = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
`;

const ViewTitle = styled.h2`
	color: #63687d;
`;

const CardView = styled.div`
	width: 100%;
	height: 100px;
	border-radius: 0.5rem;
	padding: 2rem;
	background-color: #f1f3fa;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const CardPorcent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	height: 70px;
`;
export { StyledView, ViewTitle, CardView, CardPorcent };
