    import mongoose from '@/database';

    const ProjectSchema = new mongoose.Schema({
        titulo: {
            type: String,
            required: true,
            unique: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        empresa: {
            type: String,
            required: true,
        },
        genero: {
            type: String,
            required: true,
        },
        plataforma: {
            type: String,
            required: true,
        },
        valor: {
            type: Number,
            required: true,
        },
        estoque: {
            type: Boolean,
            required: true,
        },
        featuredImage: {
            type: String,
            required: false,
        },
        images: [{
            type: String,
        }, ],
        createdAt: {
            type: Date,
            default: Date.now,
        },

    });


    export default mongoose.model('Jogos', ProjectSchema);