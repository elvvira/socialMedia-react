import { StyledTitleMode } from '../header/styles';
import { TodayContainer } from '../social-card/styles';
import { CardPorcent, CardView, StyledView, ViewTitle } from './styles';

const ViewCard = () => {
	return (
		<StyledView>
			<ViewTitle>Overview - Today</ViewTitle>
			<div>
				<CardView>
					<div>
						<StyledTitleMode>Page Views</StyledTitleMode>
						<p>87</p>
					</div>
					<CardPorcent>
						<img src='/images/icon-facebook.svg' alt='' />
						<TodayContainer>
							<img src='/images/icon-up.svg' alt='' />
							<p>3%</p>
						</TodayContainer>
					</CardPorcent>
				</CardView>
			</div>
		</StyledView>
	);
};

export default ViewCard;
