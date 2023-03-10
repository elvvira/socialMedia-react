import styled from 'styled-components';

const StyledHeader = styled.div`
	width: 100vw;
	height: 300px;
	background-color: ${({ dark }) => (dark ? ' #20222F' : '#f7f9ff')};
	border-bottom-left-radius: 3rem;
	border-bottom-right-radius: 3rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: relative;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		height: 300px;
		justify-content: space-between;
		padding: 0rem;
		padding-top: 3rem;
		padding-left: 5rem;
		padding-right: 5rem;
	}
`;

const StyledTitleContainer = styled.div`
	position: relative;
	color: ${({ dark }) => (dark ? 'white' : 'black')};

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: #63687d;
		bottom: 0;
		@media screen and (min-width: 768px) {
			display: none;
		}
	}
`;

const StyledModeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.3rem;
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
	transform: translateX(${({ dark }) => (dark ? '0' : '135%')});
`;

const StyledTitleMode = styled.p`
	color: ${({ dark }) => (dark ? '#8C98C6' : '#63687d')};
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
