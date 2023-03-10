import styled from 'styled-components';

const StyledCard = styled.div`
	width: 100%;
	height: 250px;
	border-top: 5px solid ${({ border }) => border};
	border-radius: 0.5rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-color: ${({ dark }) => (dark ? '#252B42' : '#f1f3fa')};
	margin-bottom: 1rem;
	color: ${({ dark }) => (dark ? 'white' : '#black')};
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
	padding-top: 1rem;
`;

const TodayText = styled.p`
	color: ${({ color }) => color};
`;
export {
	StyledCard,
	CardSocialInfo,
	CardNumber,
	CardType,
	TodayContainer,
	TodayText
};
