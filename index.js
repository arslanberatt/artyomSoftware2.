
const express = require('express');
const app = express();
const path= require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const sequelize = require("./data/db");

const adminRoutes = require('./routes/admin');
const usersRoutes = require("./routes/users");
const authRoutes = require('./routes/auth');

app.use("/bootstrap", express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));



app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
        table: 'Session',
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}));

app.use(express.static('node_modules'));
app.use("/static",express.static(path.join(__dirname,'public')));
app.use("/css", express.static(path.join(__dirname, 'public/css')));
app.use("/images", express.static(path.join(__dirname, 'public/images')));

app.use("/admin", adminRoutes);
app.use("/account", authRoutes);
app.use(usersRoutes);



app.listen(process.env.PORT || 3003, () => {
    console.log("node.js server at port 3003")
});


