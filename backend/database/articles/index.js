import * as database from './database.json' assert { type: 'json' };

const getAllArticles = () => {
	return database.default.articles;
};


export const articlesDatabase = {
	getAllArticles
}
