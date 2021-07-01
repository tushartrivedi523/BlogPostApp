const validateLoginData = async function findData(Login, body,res){
    Login.find({
        userId:body.userId,
        password:body.password
    },function(err,users){
        if(err)
        {
            console.log("Invalid");
            return;
        }
        if(users.length == 0)
        {
            return res.redirect("/");
        }
        else
        {
            console.log("User Successfully Authenticated!!")
            // console.log(users)
            res.redirect("/viewBlogs")
        }
    })   
}

module.exports = validateLoginData;