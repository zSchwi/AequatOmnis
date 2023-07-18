import express, { Router } from 'express';
import bodyParser from 'body-parser';
import { Jogos, Admin, Uploads, Client } from '@/app/controllers';
import User from './app/schemas/User';
import swaggerUi from 'swagger-ui-express';

const swaggerFile = require('./swagger.json');

const app = express();
const port = 3000;

const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/jogos', Jogos);
app.use('/admin', Admin);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/uploads', Uploads);
app.use("/client", Client);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/front/index.html")
});

function createAdminUser() {
    const name = 'admin';
    const email = 'admin';
    const password = 'admin';
    const administrador = true;

    User.findOne({ email })
        .then((userData) => {
            if (userData) {
                console.log('Usuário administrador já existe.');
                return;
            }

            const novoUsuario = new User({
                name,
                email,
                password,
                administrador,
            });
            novoUsuario
                .save()
                .then(() => {
                    console.log('Usuário admin criado com sucesso');
                })
                .catch((error) => {
                    console.error('Erro ao criar usuário:', error);
                });
        })
        .catch((error) => {
            console.error('Erro ao consultar usuário no banco de dados:', error);
        });
}
createAdminUser();

console.log(`Servidor rodando no link https://localhost:${port}`);
app.listen(port);