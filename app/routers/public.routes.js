const { Router } = require('express');

const attachTo = (app, controllers) => {
    const router = new Router();

    const { 
        getController: { getHome, getRegister, getLogin }, 
        postController: { postRegister, postLogin } 
    } = controllers;


    app
        .get('/', getHome)

        .get('/register', getRegister)

        .get('/login', getLogin)

        .post('/register', postRegister)

        .post('/login', postLogin);

    app.use('/', router);
};

module.exports = { attachTo };