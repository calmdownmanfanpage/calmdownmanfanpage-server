const phraseModel = require("../Models/phraseModel");
const data = require("./phrase.json");

const getPage = async (req, res) =>{
    const pageId = req.query.pageId;
    try{
        if(pageId>0){
            const phraseData = await phraseModel.findOne({
                contentId:pageId
            });
            res.status(200).json(phraseData);
        }else{
            const phraseData = await phraseModel.find({});
            res.status(200).json(phraseData);
        }
    }catch(err){
        res.status(500).json(`getPage Error : ${err}`);
    }
}


const postLikes = async (req, res) =>{
    const {pageId, likes} = req.body
    try{
        await phraseModel.updateOne({contentId: pageId}, {likes:likes})
        res.status(200);
    }catch(err){
        res.status(500).json(`postLIkes Error : ${err}`);
    }
}

module.exports = {getPage, postLikes};