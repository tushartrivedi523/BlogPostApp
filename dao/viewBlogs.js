const viewBlogs = function viewData(Blogs, userId,res){
    Blogs.find({},function(err, blogs){
        if(err)
        {
            console.log("Error in Fetching data")
        }
        console.log("Data Successfully Fetched!!")
        // console.log(blogs)
        return res.render("dashboard",
        {
             blogs:blogs,
             userId:userId
        })
    })
}


module.exports = viewBlogs 