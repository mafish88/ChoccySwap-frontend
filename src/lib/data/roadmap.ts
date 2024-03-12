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
					'Establishing liquidity pools linked to tokens from key ecosystem players to strengthen the platform\'s foundation and create a diverse trading environment that reflects the collective strength of the Chromia ecosystem.'
			},
			{
				title: 'Subscription model',
				description: 'Allowing token holders more flexibility with access to lower trading fees on our platform. By offering lower trading fees to token holders, we aim to incentivize participation and demonstrate the practical utility of the token both for transactions as well as participation in the growing services across our ecosystem. Our aspiration is for CCY to emerge as a valuable digital asset that customers will see long-term value in holding.',
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
					'Utilizing Metamask Snaps to simplify the user experience and seamlessly integrate with the Chromia network. This will make it easier for users to navigate and engage with the platform, creating a more intuitive and frictionless experience overall.'
			},
			{
				title: 'Oracles',
				description:
					'Integrating oracle solutions and price feeds to provide accurate and reliable data for other chains within the Chromia network and beyond. This will enhance interoperability and facilitate the exchange of information, creating a more interconnected ecosystem for all participants.'
			},
			{
				title: 'Sharding',
				description:
					'Build a dedicated environment for lower liquidity pairs, allowing high-volatility trades involving "meme" tokens and similar assets without disrupting the functionality of blue-chip tokens. This distinction ensures optimal performance and stability for all types of assets, adhering to diverse investment strategies and preferences.'
			}
		]
		
	},
];
