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
				description: 'Release the app and let users try it out on a private server.'
			},
			{
				title: 'FT4 update',
				description: 'Update the dapp to use the latest version of the FT protocol.'
			},
			{
				title: 'Website and branding update',
				description: 'Release a website with the new branding to prepare for mainnet launch.'
			},
			{
				title: 'Liquidity deals',
				description: 'Strike deals with all ecosystem players to add liquidity to the swap on launch.'
			},
		],
	},
	{
		title: "In progress",
		color: inProgressColor,
		events: [
			{
				title: 'Orderbook implementation',
				description: 'Add the orderbook to the swap.'
			},
			{
				title: 'Performance test',
				description: 'Test the orderbook to make sure a mixed model DEX is feasible.'
			},
			{
				title: 'User onboarding',
				description: 'Create a promotional campaign on socials to bring in more users.'
			},
			{
				title: 'Launchpad implementation',
				description: 'Create a launchpad to allow users to create tokens and ICOs on Choccyswap.'
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
					'Enforce the deals to create the 6 liquidity pools corresponding to the tokens from the major ecosystem players.'
			},
			{
				title: 'Subscription model',
				description: 'Allow users to use CCY tokens to pay lower liquidity fees.'
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
					'Use Metamask Snaps to allow users to have an easier time interfacing with the Chromia network.'
			},
			{
				title: 'Oracles',
				description:
					'Implement oracles/price feeds to allow other chains on the Chromia network and outside to rely on our data.'
			},
			{
				title: 'Sharding',
				description:
					'Create a separate environment for lower liquidity pairs, to allow high frequency trades on shitcoins and similars not to disrupt blue chip functionality.'
			}
		]
		
	},
];
