import { cardSocial } from '../../constants/cards-info';
import {
	StyledBall,
	StyledHeader,
	StyledMode,
	StyledModeContainer,
	StyledTitleContainer,
	StyledTitleMode
} from './styles';

const Header = ({ dark, setDark }) => {
	return (
		<StyledHeader dark={dark}>
			<StyledTitleContainer dark={dark}>
				<h1>Social Media Dashboard</h1>
				<StyledTitleMode dark={dark}>
					Total Followers: {calculateFollowers()}
				</StyledTitleMode>
			</StyledTitleContainer>
			<StyledModeContainer>
				<StyledTitleMode dark={dark}>Dark Mode</StyledTitleMode>
				<StyledMode>
					<StyledBall
						dark={dark}
						onClick={() => {
							setDark(!dark);
						}}
					/>
				</StyledMode>
			</StyledModeContainer>
		</StyledHeader>
	);
};

const calculateFollowers = () => {
	let total = 0;
	cardSocial.forEach(card => (total += card.number));
	return total;
};
export default Header;
