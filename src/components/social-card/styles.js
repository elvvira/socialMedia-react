import styled from 'styled-components';

const StyledMain = styled.div`
	position: absolute;
	top: 180px;
	width: 100%;
`;

const StyledCard = styled.div`
	width: 85%;
	height: 250px;
	margin-right: auto;
	margin-left: auto;
	border-top: 5px solid #178ff5;
	border-radius: 0.5rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-color: #f1f3fa;
`;

const CardSocialInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 0.3rem;
`;

const CardNumber = styled.p`
	font-size: 3rem;
	margin: 0;
	font-weight: bold;
`;
const CardType = styled.p`
	color: #63687d;
`;

const TodayContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	font-weight: bold;
	gap: 0.4rem;
	color: #1eb589;
`;
export {
	StyledMain,
	StyledCard,
	CardSocialInfo,
	CardNumber,
	CardType,
	TodayContainer
};
