const axios = require('axios');
const fs = require('fs');
const { promisify } = require('util');
const plotly = require('plotly');

const readdir = promisify(fs.readdir);
const plotOpt = {
	format: 'png',
	width: '1000',
	height: '500',
	filename: 'discordBot',
	world_readable: false,
	fileopt: 'overwrite',
};

async function getCandlesData(tag) { // TODO: Please use yahoo finance
	if (!tag) return;

	const nowTimestamp = parseInt(Date.now() / 1000, 10);
	const monthTimestamp = parseInt(nowTimestamp - 5356800, 10);
	const request = `candle?symbol=${tag.toUpperCase()}&resolution=D&from=${monthTimestamp}&to=${nowTimestamp}&token=${process.env.FINNHUB_TOKEN}`;

	return new Promise((resolve, reject) => {
		axios.get(`https://finnhub.io/api/v1/stock/${request}`).then((arr) => {
			if (arr.data.s) {
				if (arr.data.s === 'ok') {
					resolve(arr.data);
				} else {
					resolve();
				}
			} else resolve();
		}).catch((e) => {
			reject(e);
		});
	});
}

function getChart(tag, msg) {
	return new Promise((resolve, reject) => {
		if(!process.env.FINNHUB_TOKEN || !process.env.PLOTLY_USER || !process.env.PLOTLY_TOKEN) reject("Missing user credentials to create a chart");
		getCandlesData(tag).then((r) => {
			const arr = r;
			arr.t.forEach((v, k) => {
				const tempDate = new Date(r.t[k] * 1000);
				arr.t[k] = `${parseInt(tempDate.getDate(), 10)}-${tempDate.getMonth()}-${tempDate.getFullYear()}`;
			});
			const date = arr.t;
			const close = arr.c;
			const data = {
				data: [{
					x: date,
					y: close,
					type: 'scatter',
					mode: 'lines+markers',
					title: `${tag}'s chart`,
				}],
			};

			plotly(process.env.PLOTLY_USER, process.env.PLOTLY_TOKEN).getImage(data, plotOpt, (err, imageStream) => {
				try{
					if (err) {
						reject(err);
					}
					const filestream = fs.createWriteStream(`./img/${msg.id}.png`);
					imageStream.pipe(filestream);
					filestream.on('error', reject);
					filestream.on('finish', resolve);
				}
				catch (e) {
					reject(e)
				}

			});
		}).catch((e) => {
			reject(e);
		});
	});
}

async function deleteCharts() {
	const dir = await readdir('./img/');
	dir.forEach((file) => {
		if (file !== 'example.png') {
			fs.unlink(`img/${file}`, () => {}); // Can lead the bot to crash in some situations
		}
	});
}

module.exports = {
	getChart,
	deleteCharts,
};
