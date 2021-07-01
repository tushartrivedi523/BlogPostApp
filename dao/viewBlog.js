const viewBlog = function viewBlog(Blogs, res, id)
{
    Blogs.find({_id:id}, function(err, blog){
        if(err)
        {
            console.log("Error in fetchinf data from db");
        }
        console.log("Successfully fetched blog from db");
        // console.log(blog)
        return res.render("blogpage",{
            blog:blog
        })
    })
}

module.exports = viewBlog