import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors';

import { articleRouter } from "./routes/article-routes.js";
import { templateRouter } from "./routes/template-routes.js";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/article', articleRouter);
app.use('/api/template', templateRouter);

app.listen(PORT, () => {
	console.log(`API is listening on port ${PORT}`);
});
