const User = require("../models/user");
const bcrypt = require("bcrypt");
const Session = require('../models/session');

exports.getLogin = async (req,res)=>{
    try {
        return res.render("auth/login",{
            title:"Login"
        })
    } catch (error) {
        next(error);
    }
};

exports.getLogout = async (req,res)=>{
    try {
        await req.session.destroy();
        return res.redirect("/account/login")
    } catch (error) {
        next(error);
    }
};

exports.postLogin = async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await User.findOne({
            where:{
                username:username
            }
        })

        if(!user){
            return res.render("auth/login",{
                title:"Login",
                message: "Kullanıcı Hatalı"
            })
        }

        const match = await bcrypt.compare(password, user.password);

        if(match){
            req.session.isAuth = true;
            return res.redirect("/admin/panel")
        }

        return res.render("auth/login",{
            title:"Login",
            message: "Parola Hatalı"
        })

    } catch (error) {
        next(error);
    }
};