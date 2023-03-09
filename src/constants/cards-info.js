import { v4 } from 'uuid';

const cardSocial = [
	{
		id: v4(),
		icon: '/images/icon-facebook.svg',
		username: '@nathanf',
		number: '1987',
		category: 'FOLLOWERS',
		amount: '12 today',
		border: '#178ff5',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		icon: '/images/icon-twitter.svg',
		username: '@nathanf',
		number: '1044',
		category: 'FOLLOWERS',
		amount: '90 today',
		border: '#178ff5',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		icon: '/images/icon-instagram.svg',
		username: '@realnathanf',
		number: '11k',
		category: 'FOLLOWERS',
		amount: '1099 today',
		border: '#178ff5',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		icon: '/images/icon-youtube.svg',
		username: 'Nathan F.',
		number: '8239',
		category: 'SUBSCRIBERS',
		amount: '144 today',
		border: '#178ff5',
		color: '#DC414C',
		up: true
	}
];

export { cardSocial };
