import { v4 } from 'uuid';

const cardSocial = [
	{
		id: v4(),
		icon: '/images/icon-facebook.svg',
		username: '@nathanf',
		number: 1987,
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
		number: 1044,
		category: 'FOLLOWERS',
		amount: '90 today',
		border: '#1DA1F2',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		icon: '/images/icon-instagram.svg',
		username: '@realnathanf',
		number: 11000,
		category: 'FOLLOWERS',
		amount: '1099 today',
		border: '#EE877E',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		icon: '/images/icon-youtube.svg',
		username: 'Nathan F.',
		number: 8239,
		category: 'SUBSCRIBERS',
		amount: '144 today',
		border: '#C4032B',
		color: '#DC414C',
		up: false
	}
];

const CardViewInfo = [
	{
		id: v4(),
		category: 'Page Views',
		number: '87',
		icon: '/images/icon-facebook.svg',
		amount: '3%',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		category: 'Likes',
		number: '52',
		icon: '/images/icon-facebook.svg',
		amount: '2%',
		color: '#DC414C',
		up: false
	},
	{
		id: v4(),
		category: 'Likes',
		number: '5462',
		icon: '/images/icon-instagram.svg',
		amount: '2257%',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		category: 'Profile Views',
		number: '52K',
		icon: '/images/icon-instagram.svg',
		amount: '1375%',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		category: 'Retweets',
		number: '117',
		icon: '/images/icon-twitter.svg',
		amount: '303%',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		category: 'Likes',
		number: '507',
		icon: '/images/icon-twitter.svg',
		amount: '553%',
		color: '#1EB589',
		up: true
	},
	{
		id: v4(),
		category: 'Likes',
		number: '107',
		icon: '/images/icon-youtube.svg',
		amount: '19%',
		color: '#DC414C',
		up: false
	},
	{
		id: v4(),
		category: 'Total Views',
		number: '1407',
		icon: '/images/icon-youtube.svg',
		amount: '12%',
		color: '#DC414C',
		up: false
	}
];

export { cardSocial, CardViewInfo };
