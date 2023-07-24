import { Router } from 'express';
import Project from '@/app/schemas/Venda.js';
import AuthMiddleware from '@/app/middlewares/Auth';
import AdminMiddleware from '@/app/middlewares/Admin';
import Multer from '@/app/middlewares/Multer';

const router = new Router()



//Pegando os dados no banco de dados
router.get('/', (req, res) => {

    Project.find().then(projects => {
        res.send(projects);
        console.log("entrou no get pelo menos")
    }).catch(error => {
        console.error("Erro ao salvar novo projeto no banco de dados", error);
        res.status(400)
            .send({
                error: 'Não foi possivel obter os dados do seu projeto. Verifique os dados e tente novamente',
            });
    })
})


// Pegando um dado especifico pelo id
router.get('/:projectId', (req, res) => {

    Project.findById(req.params.projectId).then(projects => {
        res.send(projects)
    }).catch(error => {
        console.error("Erro ao salvar novo projeto no banco de dados", error);
        res.status(400)
            .send({
                error: 'Não foi possivel obter os dados do seu projeto. Verifique os dados e tente novamente',
            })
    })
})


// Cria uma nova venda 
router.post('/', (req, res) => {
    const { nome_produto, comprador, email, total } = req.body;
    Project.create({ nome_produto, comprador, email, total })
        .then(project => {
            res.status(200).send(project)
        })
        .catch(error => {
            console.error("Erro ao salvar nova venda no banco de dados", error);
            res.status(400)
                .send({
                    error: 'Não foi possivel salvar sua venda. Verifique os dados e tente novamente',
                })
        })
})

// Editar uma venda especifica
router.put('/:projectId', (req, res) => {

     const { nome_produto, comprador, email, total } = req.body;

     Project.findByIdAndUpdate(req.params.projectId, { nome_produto, comprador, email, total }, { new: true })
         .then(project => {
            console.log(project)
             res.status(200).send(project)
         })

         .catch(error => {
            console.error("Erro ao obter o objeto no banco de dados", error);
            res.status(400).send({
                    error: 'Não foi possivel atualizar o seu projeto. Verifique os dados e tente novamente',
                })
           })

})


router.delete('/:projectId', (req, res) => {

    Project.findByIdAndRemove(req.params.projectId).then(() => {
        res.send({ message: "Venda removido com sucesso" });
    }).catch(error => {
        console.error("Erro ao remover a venda", error);
        res.status(400).sent({ message: "Erro ao remover a venda, tente novamente" })
    })
});

router.post(
    '/featured-image/:projectId', [AuthMiddleware, Multer.single('featuredImage')],
    (req, res) => {

        const { file } = req;
        if (file) {
            Project.findByIdAndUpdate(
                    req.params.projectId, {
                        $set: {

                            featuredImage: file.path,
                        },
                    }, { new: true },
                )
                .then((project) => {
                    return res.send({ project });
                })
                .catch((error) => {
                    console.error('Erro ao associar imagem ao projeto', error);
                    return res
                        .status(500)
                        .send({ error: 'Ocorreu um erro, tente novamente' });
                });
        } else {
            return res.status(400).send({ error: 'Nenhuma imagem enviada' });
        }
    },
);


export default router