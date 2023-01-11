//js

//For Register Page
const registerView = (req, res) => {
    res.render("login/cadastro", {
    } );
}

// For View 
const loginView = (req, res) => {

    res.render("login/login", {
    } );
}

module.exports =  {
    registerView,
    loginView
};