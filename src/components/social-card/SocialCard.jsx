import {
	StyledCard,
	CardNumber,
	CardSocialInfo,
	CardType,
	TodayContainer,
	TodayText
} from './styles';

const SocialCard = ({
	icon,
	username,
	number,
	category,
	amount,
	border,
	color,
	up,
	dark
}) => {
	return (
		<StyledCard dark={dark} border={border}>
			<CardSocialInfo>
				<img src={icon} alt='' />
				<p>{username}</p>
			</CardSocialInfo>
			<div>
				<CardNumber>{number}</CardNumber>
				<CardType>{category}</CardType>
			</div>
			<TodayContainer>
				{up ? (
					<img src='/images/icon-up.svg' alt='' />
				) : (
					<img src='/images/icon-down.svg' alt='' />
				)}

				<TodayText color={color}>{amount}</TodayText>
			</TodayContainer>
		</StyledCard>
	);
};
export default SocialCard;
