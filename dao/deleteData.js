const deleteData = function deleteData(Blogs, id){
    Blogs.remove({_id:id}, function(err){
        if(err)
        {
            console.log("Error in deleting data from db")
        }
        console.log("Data Deleted Successfully!!");
        // res.redirect("/viewBlogs");
    })
}
module.exports = deleteData;