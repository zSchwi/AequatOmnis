import mongoose from '@/database';
import Slugfy from '../../utils/Slugfy';

const ProjectSchema = new mongoose.Schema({
    nome_produto: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    comprador: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },

});

ProjectSchema.pre("save", function(next) {
    const title = this.title;
    this.slug = Slugfy(title);
    next();
})

export default mongoose.model('Vendas', ProjectSchema);