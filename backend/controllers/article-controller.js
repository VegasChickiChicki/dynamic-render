import { articleService } from "../services/article-service.js";


const getAllArticles = (request, response) => {
	const allArticles = articleService.getAllArticles();

	response.send({
		status: 'OK',
		data: allArticles
	});
};

export const articleController = {
	getAllArticles
}
