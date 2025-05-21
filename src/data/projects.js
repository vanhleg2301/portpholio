// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
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
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 2,
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
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
		id: 2,
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
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 2,
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
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
