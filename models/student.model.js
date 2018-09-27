const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    teacherName: {type: String, required: true, max: 100},
    studentName: {type: String, required: true, max: 100},
    rollNumber:{type:String, required: true}
});

// Export the model
module.exports = mongoose.model('Student', studentSchema);