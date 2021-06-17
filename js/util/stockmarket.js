const tdvApi = require('tradingview-scraper');
const tv = new tdvApi.TradingViewAPI();

// function deleteSubscriptions(){
// 	return new Promise((resolve, reject) => {
// 		try{
// 			tv.tickerData = {};
// 			tv.subscriptions = [];
// 			resolve();
// 		} catch (e) {reject(e);}
// 	});
// }

function getStockData(tagArray = [], lookInCache = true) {
	const data = [];
	return new Promise((resolve) => {
		let i = 0;
		const size = tagArray.length;
		// I'm sure this is ugly, but it works.
		tagArray.forEach((tag) => {
			tv.getTicker(tag.toUpperCase(), lookInCache)
				.then((resp) => {
					data.push({
						status: 1,
						session: resp.current_session,
						update: resp.update_mode,
						price: (resp.current_session == 'market') ? resp.lp : resp.rtc,
						symbol: resp.short_name.toUpperCase(),
						symbol_pro: resp.pro_name.toUpperCase(),
						name: resp.description,
						changesPercentage: resp.chp,
						change: resp.ch,
						lastupdate: resp.last_update,
					});
					i++;
					if (i >= size) {
						resolve(data);
					}
				}).catch((err) => {
					console.log(err);
					data.push({
						status: 0,
					});
					i++;
					if (i >= size) resolve(data);
				});
		});
	});
}

module.exports = {
	getStockData,
	// deleteSubscriptions
};
