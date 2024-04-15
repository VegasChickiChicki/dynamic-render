import * as fs from "fs";

const saveToDatabase = (pathToDatabase, database) => {
	fs.writeFileSync(pathToDatabase, JSON.stringify(database, null, 2), {
		encoding: 'utf-8',
	});

	console.log('save to database')
};

export const databaseUtils = {
	saveToDatabase
}
