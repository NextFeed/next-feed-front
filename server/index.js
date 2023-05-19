import Dotenv from 'dotenv';
import Cors from 'cors';
import Express from 'express';
import Path from 'path';
import Api from './Routes/Api.js';


Dotenv.config();
const app = Express();
app.use(Express.json());
app.use(Cors({origin: "http://localhost:3001"}));
app.use('/api', Api);
app.use(Express.static("build"));
app.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, '..', 'build', 'index.html'));
});
app.set('port', process.env.PORT || 4000);

const server = app.listen(app.get('port'), () => {
    console.log(`Server PORT: ${server.address().port}`);
});