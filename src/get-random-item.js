import { getRandomNumber } from "./get-random-number.js";

const getRandomItem = (items) => {
	return items[getRandomNumber(0, items.length - 1)];
};

export { getRandomItem };
