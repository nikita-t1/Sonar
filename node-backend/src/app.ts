import express, {Request,Response,Application} from 'express';

const app:Application = express();
const port = 8180;
const hostname = '0.0.0.0';

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', (request, response) => {
    response.send("SUCCESS");
})

app.get('/api', (request, response) => {
    response.send("API");
})