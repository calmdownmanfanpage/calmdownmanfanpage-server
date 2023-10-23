
for(let i=0;i<data.length;i++){
    const {contentId, phrase, likes, shared} = data[i];
    if(! await phraseModel.findOne({
        contentId
    })){
        await phraseModel.create({
            contentId,
            phrase,
            likes,
            shared
        })
    }
}