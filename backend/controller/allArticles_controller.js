const allArticlesPosts = require('../models/allArticlesPosts')

//module to create article doc and save to the database
exports.saveArticle = async function(req, res){
    let heading = req.body.heading;
    let mainContent = req.body.mainContent;
    let bannerImage = req.file.path;

    let newArticle = new allArticlesPosts({
        heading: heading,
        mainContent: mainContent,
        bannerImage: bannerImage
    })

    return await newArticle.save()
    .then((data)=>{
        if(data){
            console.log(data)
            res.status(200).send('post successfully saved')
        }
        else{
            res.status(500).send('failed to save article')
        }
    })
    .catch(()=>[
        res.status(500).send('failed to save article')
    ])
}