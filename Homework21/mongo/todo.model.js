const { Schema, model } = require('mongoose');

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        required: true,
    },
});

module.exports = model('Todo', TodoSchema);
