import { databaseUtils } from "../utils.js";
import * as database from './database.json' assert { type: 'json' };

const getTemplate = () => {
	return database.default.template;
};

const updateTemplate = (template) => {
	databaseUtils.saveToDatabase('./database/template/database.json', {
		template: template
	});

	return template;
};


export const templateDatabase = {
	getTemplate,
	updateTemplate
}
