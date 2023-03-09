import {
	StyledCard,
	CardNumber,
	CardSocialInfo,
	CardType,
	TodayContainer
} from './styles';

const SocialCard = ({ icon, username, number, category }) => {
	return (
		<StyledCard>
			<CardSocialInfo>
				<img src='/images/icon-facebook.svg' alt='' />
				<p>@nathanf</p>
			</CardSocialInfo>
			<div>
				<CardNumber>1987</CardNumber>
				<CardType>FOLLOWERS</CardType>
			</div>
			<TodayContainer>
				<img src='/images/icon-up.svg' alt='' />
				<p>12 today</p>
			</TodayContainer>
		</StyledCard>
	);
};
export default SocialCard;
