//Require the beatmap class
const Beatmap = require('./beatmap.js');

exports.calculate = function (arguments) {
	console.log(arguments);

	let beatmap = new Beatmap(arguments.file);
}