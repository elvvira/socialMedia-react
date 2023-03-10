import { cardSocial, CardViewInfo } from '../../constants/cards-info';
import SocialCard from '../social-card/SocialCard';

import ViewCard from '../view-card/ViewCard';
import {
	StyledCardContainer,
	StyledMain,
	StyledViewContainer,
	ViewTitle
} from './styles';

const Main = ({ dark }) => {
	return (
		<StyledMain>
			<StyledCardContainer>
				{cardSocial.map(card => {
					return <SocialCard dark={dark} key={card.id} {...card} />;
				})}
			</StyledCardContainer>
			<ViewTitle dark={dark}>Overview - Today</ViewTitle>
			<StyledViewContainer>
				{CardViewInfo.map(card => {
					return <ViewCard dark={dark} key={card.id} {...card} />;
				})}
			</StyledViewContainer>
		</StyledMain>
	);
};
export default Main;
