import express, { Router } from 'express';
import bodyParser from 'body-parser';
import { Jogos, Auth, Uploads } from '@/app/controllers';
import User from './app/schemas/User';
import swaggerUi from 'swagger-ui-express';

const swaggerFile = require('./swagger.json');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/jogos', Jogos);
app.use('/auth', Auth);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/uploads', Uploads);

function createAdminUser() {
    const name = 'Guilherme';
    const email = 'guilherme.rosa@compjr.com';
    const password = 'botw';
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