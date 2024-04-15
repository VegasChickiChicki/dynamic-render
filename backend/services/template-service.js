import { templateDatabase } from "../database/template/index.js";

const getTemplate = () => {
	return templateDatabase.getTemplate();
};

const updateTemplate = (template) => {
	return templateDatabase.updateTemplate(template);
}

export const templateService = {
	getTemplate,
	updateTemplate
};
