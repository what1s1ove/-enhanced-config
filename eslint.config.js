const config = {
	languageOptions: {
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
	},
	rules: {
		"arrow-parens": ["error", "always"],
	},
};

const configs = [config];

export default configs;
