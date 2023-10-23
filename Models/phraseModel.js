const mongoose = require("mongoose");
 
const phraseSchema = new mongoose.Schema({
    contentId:{type: Number, required: true, unique: true},
    phrase:{type: String, required:true},
    likes:Number,
    shared:Number
})

const phraseModel = mongoose.model("PhraseData", phraseSchema);

module.exports = phraseModel;