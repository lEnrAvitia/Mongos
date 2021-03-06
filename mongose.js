
const ObjectId = mongoose.Schema.Types.ObjectId;
const Mixed = mongoose.Schema.Types.Mixed;
const esquemaDelLibro = mongoose.Schema({
    nombre: String,
    creado_en: Date,
    actualizado_en: { type: Date, default: Date.now },
    publicado: Boolean,
    idDelAuthor: {
        type: ObjectId,
        required: true,
    },
    descripcion: {
        type: String,
        default: null,
    },
    activo: {
        type: Boolean,
        default: false,
    },
    version: {
        type: Number,
        default: function() {
            return 1
        },
    },
    contribuyentes: [ObjectId],
});