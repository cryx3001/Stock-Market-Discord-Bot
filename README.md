# Stock Market Bot

It is a bot to "play" with the stock market by using fake money! It trades all tickers from TradingView.
The data is provided by [TradingView](https://www.tradingview.com) through the library [tradingview-scraper](https://github.com/imxeno/tradingview-scraper).

## Available commands

Prefix by default: `sm!`.

### Basics

- `help` - Shows the help menu, which is this message.
- `init <amount>` - Opens your account for the first time.
(You can specify how much money to start with from between `$0` and `$100,000`, default is 100,000.)
- `del` - Delete your account from the database. (__This action cannot be reversed.__)
- `prefix <prefix>` - Change the prefix of the bot. Can be done anytime and an endless amount of times.
- `ping` - To see the latency between you, the bot, and the API.
- `about` - Statistics of the bot.
- `help <command>` - Help and aliases for specified commands.

### Account Info

- `balance`/`balance @User` - To admire your/user's wealth.
- `list`/`list @User` - Your/user's open positions.
- `daily` - To get your daily reward.
- `vote` - Vote for the bot and get a reward.
- `leaderboard` - Who is the richest in your server? (Not working - Some users are not shown)

### Trading

- `search` - Search for tickers that can be traded with the bot.
- `show <stock>` - Get info about a ticker. (ex: sm!show AAPL)
- `newtrade <buy/sell> <ticker> <price/share>` - Buy/sell tickers.
(eg: `sm!newtrade buy AAPL 100 share` will buy 100 shares of Apple, `sm!newtrade buy AAPL 100` will buy 100 dollars worth of Apple shares.)
(When shorting, you gain money as the asset depreciates.)
- `closetrade <ID>` - Closes a trade. The ID can be found in your list. (eg: sm!closetrade 0) *Note: The list will start at 0, not 1*

## Okay, how do I play?

First, create your account with the bot with `<prefix>init <amount>`. Then, search for a ticker with `<prefix>show <ticker>`, and decide if you want to open a position. Finally, make that trade when desired with `<prefix>newtrade <buy/sell> <ticker> <price/share>`. Finally, manage your account with `<prefix>list` and `<prefix>closetrade <ID>`. You can search for tickers with `<prefix>search`.

[Invite](https://discord.com/oauth2/authorize?client_id=700690470891814912&scope=bot&permissions=8)
[Support Server](https://discord.gg/K3tUKAV)

## Can I run this code on my bot?

- Yep! Please fill the missing fields in `config/blank.env` and rename it to `config/prod.env`. (Free MySQL databases can be found on <https://www.alwaysdata.com>)
- `npm`, `yarn`, and `nodejs` latest versions should be installed.
- Run `yarn install` in the root directory to install the necessary modules.
- Run `./js/app.js`.
