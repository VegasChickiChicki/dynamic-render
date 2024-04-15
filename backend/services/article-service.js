import { articlesDatabase } from "../database/articles/index.js";

const getAllArticles = () => {
	return articlesDatabase.getAllArticles();
};

export const articleService = {
	getAllArticles
};
