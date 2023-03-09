import {
	StyledBall,
	StyledHeader,
	StyledMode,
	StyledModeContainer,
	StyledTitleContainer,
	StyledTitleMode
} from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledTitleContainer>
				<h1>Social Media Dashboard</h1>
				<StyledTitleMode>Total Followers: 23,004</StyledTitleMode>
			</StyledTitleContainer>
			<StyledModeContainer>
				<StyledTitleMode>Dark Mode</StyledTitleMode>
				<StyledMode>
					<StyledBall />
				</StyledMode>
			</StyledModeContainer>
		</StyledHeader>
	);
};

export default Header;
