const getFormattedDate = (date) => {
	return new Date(date).toLocaleString("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
};

export { getFormattedDate };
