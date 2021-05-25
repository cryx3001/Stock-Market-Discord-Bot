# Stock Market Bot
It is a bot to "play" with the stock market by using fake money! It also supports cryptocurrencies.
The data is provided by [tradingview](https://www.tradingview.com) through the library [tradingview-scraper](https://github.com/imxeno/tradingview-scraper).

## Available commands
Prefix by default: `sm!`
### Basics
- `help` Shows the help menu which is this message.
- `init <amount>` Opens your account.
(You can specify how much money to start with; Defaults to 100000.)
- `del` Delete your account from the database. (This action cannot be reversed.)
- `prefix <prefix>` Change the prefix of the bot.
- `ping` To see the latency between you, the bot, and the API.
- `about` Statistics about the bot.

### Account Info
- `balance` or `balance @User` To admire your / user's wealth.
- `list` or `list @User` Your / user's open positions.
- `daily` To get your daily reward.
- `vote` Vote for the bot and get a reward.
- `leaderboard` Who is the richest in your server? (Not working)

### Trading
- `search` Search for tickers and markets that are tradable with the bot.
- `show <stock>` Get info about a ticker. (ex: sm!show AAPL)
- `newtrade <buy/sell> <ticker> <price/shares>` Buy/sell tickers.
(eg: `sm!newtrade buy AAPL 100 share` will buy 100 shares of Apple, `sm!newtrade buy AAPL 100` will buy 100 dollars worth of Apple shares.)
(When selling / shorting, you gain money as the asset depreciates.)
- `closetrade <ID>` Closes a trade. The ID can be found with the list command. (ex: sm!ct 0)

### Available aliases
`help <command>` for aliases for that command.

### Okay, how do I play?
First, you are going to look for a market. Type `sm!search`, it will redirect you to a website.
Then type `sm!show <symbol>` if you want more details about it.
Now it's time to trade! Follow the instructions above for `newtrade` and `closetrade`!
Happy trading!

### Can I run this code on my bot?
- Yup! Please fill the missing fields in `config/blank.env` and rename it to `config/prod.env`. (Free MySQL databases can be found on https://www.alwaysdata.com)
- `npm`, `yarn` and `nodejs` latest versions should be installed.
- Run `yarn install` in the root directory to install the necessary modules.
- Run `./js/app.js`
