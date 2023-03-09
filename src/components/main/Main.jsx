import { cardSocial } from '../../constants/cards-info';
import SocialCard from '../social-card/SocialCard';
import ViewCard from '../view-card/ViewCard';
import { StyledMain } from './styles';

const Main = () => {
	return (
		<StyledMain>
			<SocialCard key={cardSocial.id} {...cardSocial} />
			<ViewCard />
		</StyledMain>
	);
};
export default Main;
