//FAZER REQUIRE DO MODELS

const { Op } = require('sequelize')
const nodemailer = require('nodemailer')

module.exports = class magicHandsController {
    static showHome(req, res) {
        res.render('home')
    }
    
    static showServices(req, res) {
        res.render('services')
    }

    static showClient(req, res) {
        res.render('client')
    }

    // static insertClient(req, res) {
    //     res.redirect('agendar')
    // } CADASTRAR CLIENTE E REDIRECIONAR PARA AGENDA

    static showAgendar(req, res) {
        res.render('agendar')
    }

    // static insertAgenda(req, res) {
    //     res.redirect('/')
    // } AGENDAR E REDIRECIONAR PARA AHOME

    static showConsultar(req, res) {
        res.render('consult')
    }

    static showContato(req, res) {
        res.render('contact')
    }

    static sendMessage(req, res) {
        const name = req.body.name
        const email = req.body.email
        const assunto = req.body.subject
        const mensagem = req.body.message
        const user = "magichands611@gmail.com"
        const pass = "BD78F888E8F6EE23D6552D6322F7C31B12BB"
        //magichands123 (SENHA EMAIL)

        const transporter = nodemailer.createTransport({
            host: "smtp.elasticemail.com",
            port: 2525,
            auth: {user, pass}
        })
        transporter.sendMail({
            from: user,
            to: user,
            replyTo: email,
            subject: assunto,
            text: mensagem
        }).then(info =>{
            res.redirect('/')
        }).catch(error => {
            res.send(error)
        })
    }

    static showHomeStaff(req, res){
        res.render('staffHome')
    }
}


