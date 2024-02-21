import colors from '$lib/data/colors';

const doneColor = colors.pink[600];
const inProgressColor = colors.pink.DEFAULT;
const scheduledColor = colors.blue.DEFAULT;
const planningColor = colors.blue[600];

export const roadmap = [
	{
		title: "Completed",
		color: doneColor,
		events: [
			{
				title: 'First version release',
				description: 'Introduce the application publicly and invite early adopters to explore and test its features on a private server.'
			},
			{
				title: 'FT4 update',
				description: "Improve the dapp experience by integrating it with the newest version of the FT protocol, ensuring performance and compatibility with Chromia's latest advancements."
			},
			{
				title: 'Website and branding update',
				description: 'Refreshed website with our new branding, setting the stage for the debut of our project on mainnet.'
			},
			{
				title: 'Liquidity deals',
				description: 'Strategic partnerships and collaborations with important players in the space to boost liquidity for the swap platform at launch, clearing the path for seamless trading.'
			},
		],
	},
	{
		title: "In progress",
		color: inProgressColor,
		events: [
			{
				title: 'Orderbook implementation',
				description: 'Add an order book to the AMM swap platform to expand its functionality, letting users make precise trades within asset pairs.'
			},
			{
				title: 'Performance test',
				description: 'Thoroughly test the order book feature to confirm the feasibility of a hybrid exchange model, combining the best of automated pools and orderbook trading.'
			},
			{
				title: 'User onboarding',
				description: 'Engaging promotional push across our social accounts to capture audiences attention and foster community growth. '
			},
			{
				title: 'Launchpad implementation',
				description: "Build a launchpad on Choccy's platform, allowing developers to launch tokens and initial offerings with simplicity and ease."
			},
		],
	},
	{
		title: "Scheduled",
		color: scheduledColor,
		events: [
			{
				title: 'Liquidity provision',
				description:
					'Ensure the execution of agreements to establish six robust liquidity pools, each meticulously aligned with tokens from key ecosystem players, fortifying the foundation of our platform, and fostering a diverse and resilient trading environment that reflects the collective strength of our ecosystem partners.'
			},
			{
				title: 'Subscription model',
				description: 'Empower users with the flexibility to utilize CCY tokens as a means to access reduced liquidity fees, incentivizing engagement and participation within the platform while promoting the utility and value of the CCY token as a versatile asset within our ecosystem.',
			},
		],
	},
	{
		title: "Planned",
		color: planningColor,
		events: [
			{
				title: 'Metamask integration',
				description:
					'Leverage the power of Metamask Snaps to streamline the user experience, providing seamless integration with the Chromia network and simplifying interactions for users. This innovative approach enhances accessibility and usability, empowering users to effortlessly navigate and engage with the platform, fostering a more intuitive and frictionless experience overall.'
			},
			{
				title: 'Oracles',
				description:
					'Integrate robust oracle solutions and price feeds into our system, enabling seamless access to accurate and reliable data for other chains within the Chromia network and beyond. By providing trusted data sources, we strengthen interoperability and facilitate the seamless exchange of information, fostering a more interconnected and resilient ecosystem for all participants.'
			},
			{
				title: 'Sharding',
				description:
					'Establish a dedicated environment tailored for lower liquidity pairs, providing a specialized space where high-frequency trades involving "memecoins" and similar assets can occur without disrupting the functionality of blue-chip tokens. This segregation ensures optimal performance and stability for all types of assets, fostering a balanced trading ecosystem that accommodates diverse investment strategies and preferences.'
			}
		]
		
	},
];
