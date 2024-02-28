import Words from '../../data/words.json';

const StageLabels = Words.map((item) => Object.keys(item)[0]);

export default StageLabels;
