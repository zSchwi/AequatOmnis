import { Router } from "express";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import Venda from "@/app/schemas/Venda";
import authConfig from "@/config/Auth"
import Mailer from "@/modules/Mailer";

const router = new Router();

const generateToken = params => {
    return jwt.sign(
        params, authConfig.secret, {
            expiresIn: 86400,
        });
};

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .select("+password")
        .then(user => {
            if (user) {
                bcrypt
                    .compare(password, user.password)
                    .then(result => {
                        if (result) {
                            const token = generateToken({ uid: user.id })
                            return res.send({ token: token, tokenExpiration: "1d" })
                        } else {
                            return res.status(400).send({ error: "Senha invalida" });
                        }
                    })
                    .catch(error => {
                        console.error("Error ao verificar senha", error);
                        return res.status(500).send({ error: "user not found" });
                    });
            } else {
                return res.status(404).send({ error: "user not found" });
            }

        }).catch(error => {
            console.error("Erro ao logar", error);
            return res.status(500).send({ error: "internal error server" });
        })
});

router.get('/', (req, res) => {

    Project.find().then(projects => {
        res.send(projects);
    }).catch(error => {
        console.error("Erro ao salvar novo projeto no banco de dados", error);
        res.status(400)
            .send({
                error: 'Não foi possivel obter os dados do seu projeto. Verifique os dados e tente novamente',
            });
    })

});

router.put('/:projectId', (req, res) => {

    const { title, description, category } = req.body;
    let slug = undefined;
    if (title) {
        slug = Slugfy(title);
    }
    Project.findByIdAndUpdate(req.params.projectId, { title, slug, description, category }, { new: true })
        .then(project => {
            res.status(200).send(project);
        })
        .catch(error => {
            console.error("Erro ao obter o objeto no banco de dados", error);
            res.status(400)
                .send({
                    error: 'Não foi possivel atualizar o seu projeto. Verifique os dados e tente novamente',
                });
        });

});

export default router;