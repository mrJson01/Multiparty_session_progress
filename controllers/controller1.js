exports.login = (req,res)=>{
    res.render('login');
}

exports.POSTlogin = (req,res)=>{
    
    res.render('logout');
}

exports.logout = (req,res)=>{
    
    req.session.destroy((error)=>{
        //SESSION INACTIVE FROM HERE
        //WORKS
        if(error)console.log(error);
        else res.redirect('/');
    });
}