const editData = function editData(Blogs, req, res){
    var myquery = { _id: req.body.id };
    var newvalues = { $set: 
        {   title: req.body.title, 
            category: req.body.categories,
            content: req.body.content,
            // userId: "tushar123"
        } };
    Blogs.updateOne(myquery, newvalues, function(err, blog){
        if(err)
        {
            console.log("Error in updateing db");
        }
        console.log("Data Updated Successfully!");
        res.redirect("/viewBlogs");
    })
}

module.exports = editData;