const insertDataToDB = function insertData(db,body,userId){
    db.create({
        title:body.title,
        category:body.categories,
        content:body.content,
        userId:userId,
        like:0
    }, function(err, blogs){
        if(err)
        {
            console.log("Error in fetching from db");
        }
        console.log("*************"," Data Successfullt Inserted");
    })
}
module.exports = insertDataToDB;