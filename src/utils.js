export const colors = ['#174d5a', '#ffb975', '#d67575'];

export const getRandomColor = () => {
	const c = Math.floor(Math.random() * colors.length);
	return colors[c];
};
