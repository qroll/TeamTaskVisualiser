const mongoose = require("../mongoose.js");
const Schema = mongoose.Schema;

const Task = mongoose.model(
    "Task",
    new Schema (
        {
            task: { type: Schema.Types.String }
        },
        {
            timestamps: true,
            strict: false
        }
    )
);

module.exports = Task;