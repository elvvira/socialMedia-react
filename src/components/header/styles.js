import styled from 'styled-components';

const StyledHeader = styled.div`
	width: 100vw;
	height: 300px;
	background-color: #f7f9ff;
	border-bottom-left-radius: 3rem;
	border-bottom-right-radius: 3rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: relative;
`;

const StyledTitleContainer = styled.div`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: #63687d;
		bottom: 0;
	}
`;

const StyledModeContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledMode = styled.div`
	width: 50px;
	height: 20px;
	background-color: #aeb3cb;
	border-radius: 1rem;
	position: relative;
`;

const StyledBall = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50px;
	background-color: white;
	position: absolute;
	left: 1px;
`;

const StyledTitleMode = styled.p`
	color: #63687d;
	font-size: 0.9rem;
	font-weight: bold;
`;

export {
	StyledHeader,
	StyledTitleContainer,
	StyledModeContainer,
	StyledMode,
	StyledBall,
	StyledTitleMode
};
