import { templateService } from "../services/template-service.js";

const getTemplate = (request, response) => {
	const template = templateService.getTemplate();

	response.send({
		status: 'OK',
		data: template
	});
};

const updateTemplate = (request, response) => {
	const { body } = request;

	if (!body.template) {
		response.status(400).send({
			status: 'ERROR',
			message: "Missing required fields"
		});

		return;
	}

	const template = templateService.updateTemplate(body)

	response.send({
		status: 'OK',
		data: template
	});
};

export const templateController = {
	getTemplate,
	updateTemplate
}
