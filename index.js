const express = require("express")
const port = 9000
const path = require("path")
const app = express()

const db = require('./config/mongoose')
const Login = require("./models/login")
const Blogs = require("./models/blogs")
const insertDataToDB = require("./dao/insertData")
const validateLoginData = require("./dao/loginValidate");
const viewBlogs = require("./dao/viewBlogs")
const viewBlog = require("./dao/viewBlog")
const editData= require("./dao/editData")
const deleteData = require("./dao/deleteData");

/**
 * Setting Up View Engine as ejs
*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,'views'))


/**
 * Middleware for declareing assets or static files
 */
app.use(express.static("assets"));

/**
 * Middleware for fetching the form data
 */
app.use(express.urlencoded())


app.get("/", function(req,res){
    res.render("homepage")
})

var userId;
var likeCheck = false;
app.post("/validateLogin", function(req,res){

    userId = req.body.userId
    validateLoginData(Login,req.body,res)  
})


app.post("/newPost", function(req,res){

    // console.log(req.query.userId);
    res.render("newpost",{
        userId:userId
    })

})

app.post("/addPost", async function(req,res){
    
    //Inserting Data to DB 
    await insertDataToDB(Blogs,req.body, userId)

    userId = userId;
    return res.redirect("/viewBlogs")

})

app.post("/backToDashboard", function(req,res){

    res.redirect("/viewBlogs")

})

app.get("/viewBlogs", async function(req,res){

    //Display data from db
    var blogs;
    await viewBlogs(Blogs, userId,res);
    
})

app.get("/viewBlog/", async function(req,res){

    //View data from db
    var id = req.query.id;
    viewBlog(Blogs, res, id)
    
})

app.get("/editPost/", function(req, res){
    
    var id = req.query.id
    res.render("editpage",{id:id});
})

app.post("/edit",function(req,res){

    editData(Blogs, req, res);   

})
app.get("/deletePost/", function(req,res){
    var id = req.query.id

    //Deleting post from db
    deleteData(Blogs, id);

    res.redirect("/viewBlogs");

})


app.get('*', function(req, res){
    res.render("404")
  });


app.listen(port, function(){
    console.log("Server running at port 9000")
})