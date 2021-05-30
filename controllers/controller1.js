exports.login = (req,res)=>{
    res.render('login');
    console.log(process.env.MONGO_DB);
}

exports.POSTlogin = (req,res)=>{
    
    res.render('login');
}