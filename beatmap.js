// class Beatmap
// {
// public:

// private:

// };

export class Beatmap {

	// Constructor
	constructor(file) {
		this.file = file;

		// Beatmap(id);

		this.EDifficultyAttributeType = {
			Aim = 0,
			Speed,
			OD,
			AR,
			MaxCombo,
			Strain,
			HitWindow300,
			ScoreMultiplier,
			Flashlight,
			SliderFactor,

			NumTypes,
		};

		this.ERankedStatus = {
			Ranked = 1,
			Approved = 2,
			Qualified = 3,
			Loved = 4,
		};

		this.EScoreVersion = {
			ScoreV1 = 1,
			ScoreV2 = 2,
		};

		this.s_difficultyAttributes;

		// var list_of_stocks = {
		// 	"CBB": "Communications",
		// 	"VZ": "Communications",
		// 	"UPS": "Transportation",
		// 	"RRTS": "Transportation",
		// 	"AAC": "Heath"
		// };
		// for (var key in list_of_stocks) {
		// 	if (list_of_stocks.hasOwnProperty(key)) {
		// 		console.log(key + " -> " + list_of_stocks[key]);
		// 	}
		// }

		// // General information
		// this._id;
		// _mode = EGamemode:: Osu;

		// // Calculated difficulty
		// using difficulty_t = std:: unordered_map <
		// std:: underlying_type_t < EMods >,
		// 	std:: array < f32, NumTypes >>;

		// difficulty_t _difficulty;

		// // Additional info required for processor
		// ERankedStatus _rankedStatus;
		// EScoreVersion _scoreVersion;
		// this._numHitCircles = 0;
		// this._numSliders = 0;
		// this._numSpinners = 0;
	}

	// Getter
	get Id() {
		return this._id;
	}

	get RankedStatus() {
		return _rankedStatus;
	}

	get ScoreVersion() {
		return _scoreVersion;
	}

	get NumHitCircles() {
		return _numHitCircles;
	}

	get NumSliders() {
		return _numSliders;
	}

	get NumSpinners() {
		return _numSpinners;
	}

	get DifficultyAttribute(mods, type) { };

	// Method
	setRankedStatus(rankedStatus) {
		_rankedStatus = rankedStatus;
	}

	setScoreVersion(scoreVersion) {
		_scoreVersion = scoreVersion;
	}

	setNumHitCircles(numHitCircles) {
		_numHitCircles = numHitCircles;
	}

	setNumSliders(numSliders) {
		_numSliders = numSliders;
	}

	setNumSpinners(numSpinners) {
		_numSpinners = numSpinners;
	}

	setDifficultyAttribute(mods, type, value) { };

	setMode(mode) {
		_mode = mode;
	}

	ContainsAttribute(difficultyAttributeName) {
		return s_difficultyAttributes.find(difficultyAttributeName) != s_difficultyAttributes.end();
	}

	DifficultyAttributeFromName(difficultyAttributeName) {
		return s_difficultyAttributes.at(difficultyAttributeName);
	}

}