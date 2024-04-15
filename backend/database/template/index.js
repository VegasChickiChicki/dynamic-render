import { databaseUtils } from "../utils.js";
import * as database from './database.json' assert { type: 'json' };

const getTemplate = () => {
	return database.default;
};

const updateTemplate = (data) => {
	databaseUtils.saveToDatabase('./database/template/database.json', {
		template: data.template,
		styles: data?.styles || ''
	});

	return data;
};


export const templateDatabase = {
	getTemplate,
	updateTemplate
}
