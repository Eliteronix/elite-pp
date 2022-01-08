// class Beatmap
// {
// public:

// 	static bool ContainsAttribute(const std::string &difficultyAttributeName)
// 	{
// 		return s_difficultyAttributes.find(difficultyAttributeName) != s_difficultyAttributes.end();
// 	}

// 	static EDifficultyAttributeType DifficultyAttributeFromName(const std::string &difficultyAttributeName)
// 	{
// 		return s_difficultyAttributes.at(difficultyAttributeName);
// 	}

// private:
// 	static const std::unordered_map<std::string, EDifficultyAttributeType> s_difficultyAttributes;

// 	// General information
// 	s32 _id;
// 	EGamemode _mode = EGamemode::Osu;

// 	// Calculated difficulty
// 	using difficulty_t = std::unordered_map<
// 		std::underlying_type_t<EMods>,
// 		std::array<f32, NumTypes>>;

// 	difficulty_t _difficulty;

// 	// Additional info required for processor
// 	ERankedStatus _rankedStatus;
// 	EScoreVersion _scoreVersion;
// 	s32 _numHitCircles = 0;
// 	s32 _numSliders = 0;
// 	s32 _numSpinners = 0;
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

	get DifficultyAttribute(mods, type);

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

	setDifficultyAttribute(mods, type, value);

	setMode(mode) {
		_mode = mode;
	}

}