const phraseModel = require("../Models/phraseModel");

const getData = async (req, res) =>{
    console.clear();
    const pageId = req.query.pageId;
    try{
        if(pageId){
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

const updateData = async (req, res) =>{
    const {data} = req.body;
    console.log(`contentID:${data.contentId} update - likes:${data.likes}, shared:${data.shared}`);
    try{
        await phraseModel.updateOne({contentId: data.contentId}, {
            likes: data.likes,
            shared: data.shared,
        })
        res.status(200).send();
    }catch(err){
        res.status(500).json(`updateData Error : ${err}`);
    }
}

module.exports = {getData, updateData};