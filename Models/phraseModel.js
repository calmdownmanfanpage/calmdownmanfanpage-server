const mongoose = require("mongoose");
 
const phraseSchema = new mongoose.Schema({
    contentId:{type: Number, required: true, unique: true},
    phrase:{type: String, required:true},
    likes:{type: Number, required:true},
    shared:{type: Number, required:true},
})

const phraseModel = mongoose.model("PhraseData", phraseSchema);

module.exports = phraseModel;