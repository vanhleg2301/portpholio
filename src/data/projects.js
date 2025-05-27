// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Home Tuition Care',
		category: 'Web Application',
		img: require('@/assets/images/hometuitioncare/hometuitioncare.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Home Tuition Care',
			singleProjectDate: 'May 26, 2025',
			singleProjectTag: 'Laravel',
		},
		projectImages: [
			{
				id: 1,
				title: 'Doughnut chart',
				img: require('@/assets/images/web3fund/doughnut.jpg'),
			},
			{
				id: 2,
				title: 'Web3Fund',
				img: require('@/assets/images/web3fund/doughnut.jpg'),
			},
			{
				id: 3,
				title: 'Web3Fund',
				img: require('@/assets/images/web3fund/doughnut.jpg'),
			},
		],
		projectInfo: {
			clientHeading: 'Information',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Home Tuition Care',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Fullstack developer',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://www.hometuitioncare.com.sg/',
				},
				{
					id: 4,
					title: 'Phone',
					details: '0978522556',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Help parents find tutors and connect with them quickly, offering personalized home tuition services that cater to the individual needs of students, ensuring quality education and convenience.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'VueJs',
						'CSS & SCSS',
						'JavaScript',
						'Laravel 10',
						'MySQL'
					],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{
					id: 1,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 3,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 4,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'Bitbucket',
					icon: 'bitbucket',
					url: 'https://bitbucket.org/giaophong/hometuitioncare/src',
				}
			],
		},
	},
	{
		id: 2,
		title: 'Web 3 Fund',
		category: 'Web Application',
		img: require('@/assets/images/web3fund/web3fund.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Web 3 Fund',
			singleProjectDate: 'Apr 01, 2025',
			singleProjectTag: 'Laravel',
		},
		projectImages: [
			{
				id: 1,
				title: 'Doughnut chart',
				img: require('@/assets/images/web3fund/dashboard.png'),
			},
			{
				id: 2,
				title: 'Web3Fund',
				img: require('@/assets/images/web3fund/step1.png'),
			},
			{
				id: 3,
				title: 'Web3Fund',
				img: require('@/assets/images/web3fund/step2.png'),
			},
		],
		projectInfo: {
			clientHeading: 'Information',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'JUNIOR DEVS',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Fullstack developer',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://web3fund.net',
				},
				{
					id: 4,
					title: 'Phone',
					details: '0889399997',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Helping traders develop their trading skills.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'VueJs',
						'CSS & SCSS',
						'JavaScript',
						'TailwindCSS',
						'Laravel 10',
						'MySQL'
					],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{
					id: 1,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 3,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 4,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'Bitbucket',
					icon: 'bitbucket',
					url: 'https://bitbucket.org/giaophong/traderacademy/src/main',
				}
			],
		},
	},
	{
		id: 3,
		title: 'Job Linker',
		category: 'Web Application',
		img: require('@/assets/images/joblinker/joblinker.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Job Linker',
			singleProjectDate: 'Sep - Dec, 2024',
			singleProjectTag: 'NodeJs',
		},
		projectImages: [
			{
				id: 1,
				title: 'JobLinker',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'JobLinker',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'JobLinker',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
		projectInfo: {
			clientHeading: 'Information',
			companyInfos: [
				{
					id: 1,
					title: 'FPT',
					details: 'FPT University Graduation Project',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Back-end & Database',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://joblinker.pro.vn',
				},
				{
					id: 4,
					title: 'Phone',
					details: '0978522556',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Web application that connects users to the jobs they want, like Topcv or careerviet model',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'ReactJs',
						'TailwindCss',
						'ExpressJs (Framework or NodeJs)',
						'MySql',
						'Socket.io',
						'StreamIo',
					],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{
					id: 1,
					details:
						'The team consists of 5 members: 1 documentation specialist, 2 front-end developers, 2 back-end developers, and all of them are also testers. I am the tech lead and the main back-end developer of the project.',
				},
				{
					id: 2,
					details:
						'',
				},
				{
					id: 3,
					details:
						'',
				},
				{
					id: 4,
					details:
						'',
				},
			],
			socialSharingsHeading: 'Source Code',
			socialSharings: [
				{
					id: 1,
					name: 'GitLab',
					icon: 'gitlab',
					url: 'https://gitlab.com/vanhleg2301/SEP490_FU-HoaLac_JobLinker',
				}
			],
		},
	},
];

export default projects;
