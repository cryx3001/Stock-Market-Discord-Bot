const tool = require('../util/tools.js');

exports.run = (client, msg, args) => {
	if (args) {
		const cmd = client.commands.get(args.toLowerCase())
			|| client.commands.get(client.aliases.get(args.toLowerCase()));
		if (cmd) {
			return msg.channel.send(tool.createEmbedMessage(msg, '008CFF', cmd.config.name,
				[
					{
						name: 'Description',
						value: cmd.config.description,
					},
					{
						name: 'Usage',
						value: `${cmd.config.usage} ${cmd.config.syntax || ''}`,
					},
					{
						name: 'Aliases',
						value: `${cmd.config.aliases || 'None'}`,
					},
				]));
		}
	}

	return msg.channel.send(tool.createEmbedMessage(msg, '008CFF', 'Help!',
		[
			{
				name: 'Basics',
				value: "- `help` - Shows the help menu which is this message.\n"
					+ '- `init <amount>` Opens your account.\n'
					+ '*(You can specify how much money to start with from between `$0` and `$100,000`, default is 100,000.)*\n'
					+ '- `del` - Delete your account from the database. (__This action cannot be reversed.__)\n'
					+ '- `prefix <prefix>` - Change the prefix of the bot. Can be done anytime and an endless amount of times.\n'
					+ '- `ping` - To see the latency between you, the bot, and the API.\n'
					+ '- `about` - Statistics of the bot.\n'
					+ '- `help <command>` - Help and aliases for specified commands.\n',
			},
			{
				name: 'Account Info',
				value: "- `balance`/`balance @User` - To admire your/user's wealth.\n"
					+ "- `list`/`list @User` - Your/user's open positions.\n"
					+ '- `daily` - To get your daily reward.\n'
					+ '- `vote` - Vote for the bot and get a reward.\n'
					+ '- `leaderboard` - Who is the richest in your server? (Not working - Some users are not shown)\n',
			},
			{
				name: 'Trading',
				value: '- `search` - Search for tickers and markets that can be traded with the bot on TradingView.\n'
					+ '- `show <stock>` - Get info about a ticker. (ex: `sm!show AAPL`)\n'
					+ '- `newtrade <buy/short> <ticker> <price/share>` - Buy/short tickers.\n'
					+ '*(ex: `sm!newtrade buy AAPL 100 share` will buy 100 shares of Apple, `sm!newtrade buy AAPL 100` will buy 100 dollars worth of Apple shares.)*\n'
					+ '*(When shorting, you gain money as the asset depreciates.)*\n'
					+ '- `closetrade <ID>` - Closes a trade. The ID can be found in your list. (ex: `sm!ct 0`)\n',

			},
			{
				name: 'Support',
				value: '[Invite](https://discord.com/oauth2/authorize?client_id=700690470891814912&scope=bot&permissions=8)\n'
					+ '[Support Server](https://discord.gg/K3tUKAV)\n'
			},
		])).catch((e) => {
			if (e.message === 'Missing Permissions') {
				msg.author.send("I can't send any messages in this channel! Please give me the needed permissions to send messages!");
			}
		});
};

exports.config = {
	name: 'Help!',
	category: 'Basics',
	usage: 'help',
	description: "You're here",
};
