import { default as baseConfigs } from "./eslint.config.js";

const config = {
	rules: {
		semi: ["error", "never"],
	},
};

const configs = [...baseConfigs, config];

export default configs;
