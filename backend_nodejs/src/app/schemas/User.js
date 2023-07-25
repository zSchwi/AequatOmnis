import mongoose from '@/database';
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    administrador: {
        type: Boolean,
        select: false,
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetTokenExpiration: {
        type: Date,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10).then(hash => {
        this.password = hash;
        next();
    }).catch(error => {
        console.error("Error no hash de senha");
    });
});

export default mongoose.model('Client', UserSchema);