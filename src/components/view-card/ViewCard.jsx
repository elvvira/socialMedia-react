import { StyledTitleMode } from '../header/styles';
import { TodayContainer, TodayText } from '../social-card/styles';
import { CardPorcent, CardView, CardViewNumber } from './styles';

const ViewCard = ({ icon, category, number, amount, color, up, dark }) => {
	return (
		<CardView dark={dark}>
			<div>
				<StyledTitleMode>{category}</StyledTitleMode>
				<CardViewNumber>{number}</CardViewNumber>
			</div>
			<CardPorcent>
				<img src={icon} alt='' />
				<TodayContainer>
					{up ? (
						<img src='/images/icon-up.svg' alt='' />
					) : (
						<img src='/images/icon-down.svg' alt='' />
					)}

					<TodayText color={color}>{amount}</TodayText>
				</TodayContainer>
			</CardPorcent>
		</CardView>
	);
};

export default ViewCard;
