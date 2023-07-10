import { Router } from 'express';
import Project from '@/app/schemas/Jogos';
import Slugfy from '../../utils/Slugfy';
import slugify from 'slugify';
import AuthMiddleware from '@/app/middlewares/Auth';
import AdminMiddleware from '@/app/middlewares/Admin';
import Multer from '@/app/middlewares/Multer';


const router = new Router();

//Mostra apenas tudo

router.get('/TUDO', (req, res) => {

    Project.find().then(projects => {
        res.send(projects);
    }).catch(error => {
        console.error("Erro ao salvar novo projeto no banco de dados", error);
        res.status(400)
            .send({
                error: 'Não foi possivel obter os dados do seu projeto. Verifique os dados e tente novamente',
            });
    })

})

//Mostra apenas Titulo, Categoria, Descricao e etc.

router.get('/', (req, res) => {

    Project.find().then((data) => {
            const projects = data.map((project) => {
                return {
                    title: project.title,
                    category: project.category,
                    description: project.description,
                    priority: project.priority,
                    deadline: project.deadline,
                    slug: project.slug,
                    featuredImage: project.featuredImage,
                };
            })
            res.send(projects);
        })
        .catch((error) => {
            console.error('Erro ao obter os dados do projeto. ', error);
            return res.status(400).send({
                error: 'Não foi possível obter os dados do projeto. Tente novamente. ',
            });
        });
});



router.post('/', (req, res) => {
    const { title, slug, description, category } = req.body;
    Project.create({ title, slug, description, category })
        .then(project => {
            res.status(200).send(project);
        })
        .catch(error => {
            console.error("Erro ao salvar novo projeto no banco de dados", error);
            res.status(400)
                .send({
                    error: 'Não foi possivel salvar seu projeto. Verifique os dados e tente novamente',
                });
        });
});

router.put('/:projectId', AuthMiddleware, AdminMiddleware, (req, res) => {

    const { title, description, category } = req.body;
    let slug = undefined;
    if (title) {
        slug = Slugfy(title);
    }
    Project.findByIdAndUpdate(req.params.projectId, { title, slug, description, category, priority, deadline }, { new: true })
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

router.delete('/:projectId', (req, res) => {

    Project.findByIdAndRemove(req.params.projectId).then(() => {
        res.send({ message: "Projeto removido com sucesso" });
    }).catch(error => {
        console.error("Erro ao remover o projeto", error);
        res.status(400).sent9({ message: "Erro ao remover o projeto, tente novamente" })
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

router.post("/image", Multer.single("image"), (req, res) => {
    console.log(req);
    res.send();
})

router.post('/images/:projectId', Multer.array('images'), (req, res) => {

    const { files } = req;

    if (files && files.length > 0) {
        const images = [];
        files.forEach((file) => {
            images.push(file.filename);
        });
        Project.findByIdAndUpdate(
                req.params.projectId, {
                    $set: { images },
                }, { new: true },
            )
            .then((project) => {
                return res.send({ project });
            })
            .catch((error) => {
                console.error('Erro ao associar imagens ao projeto', error);
                return res
                    .status(500)
                    .send({ error: 'Ocorreu um erro, tente novamente' });
            });
    } else {
        return res.status(400).send({ error: 'Nenhuma imagem enviada' });
    }
});

export default router;