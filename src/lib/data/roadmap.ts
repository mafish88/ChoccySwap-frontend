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
				description: 'Introduce the application to the world and invite users to experience its capabilities within the confines of a private server environment.'
			},
			{
				title: 'FT4 update',
				description: 'Enhance the dapp by seamlessly integrating it with the most cutting-edge iteration of the FT protocol, ensuring optimal performance and compatibility with the latest advancements on Chromia.'
			},
			{
				title: 'Website and branding update',
				description: 'Release an updated website with our new branding, setting the stage for the debut of our project on the mainnet.'
			},
			{
				title: 'Liquidity deals',
				description: 'Forge strategic partnerships with key stakeholders across the ecosystem, fostering a harmonious collaboration to infuse liquidity into the swap platform upon its launch, paving the way for a robust exchange from the outset.'
			},
		],
	},
	{
		title: "In progress",
		color: inProgressColor,
		events: [
			{
				title: 'Orderbook implementation',
				description: 'Implement an orderbook system seamlessly into the AMM swap platform, enhancing its functionality and providing users with an enhanced way of interacting with asset pairs, empowering them to make precise trades.'
			},
			{
				title: 'Performance test',
				description: 'Conduct rigorous testing on the orderbook functionality to validate the feasibility of implementing a hybrid model decentralized exchange, blending the best elements of AMM and orderbook trading.'
			},
			{
				title: 'User onboarding',
				description: 'Launch an engaging and captivating promotional campaign across all of our social media platforms, captivating audiences with compelling content and enticing offers to attract a wave of new users, igniting excitement and fostering community growth within our digital ecosystem.'
			},
			{
				title: 'Launchpad implementation',
				description: 'Establish a dynamic launchpad platform within Choccyswap\'s ecosystem, empowering users to effortlessly create tokens and launch ICOs with ease and efficiency.'
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
