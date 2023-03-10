import styled from 'styled-components';

const StyledMain = styled.div`
	position: absolute;
	top: 200px;
	width: 100%;
	@media screen and (min-width: 768px) {
		top: 150px;
	}
`;

const StyledCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	gap: 1rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;
const ViewTitle = styled.h2`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	color: ${({ dark }) => (dark ? 'white' : '#63687d')};
`;

const StyledViewContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	gap: 1rem;
	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
`;
export { StyledMain, StyledCardContainer, StyledViewContainer, ViewTitle };
