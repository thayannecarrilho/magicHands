//FAZER REQUIRE DO MODELS

const { Op } = require('sequelize')
const nodemailer = require('nodemailer')
const { BiUpArrowCircle } = require('react-icons/bi')
const tblclientes = require('../models/tblclientes')
const tblagenda = require('../models/tblagenda')
const { raw } = require('mysql2')


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

    static insertClient(req, res) {
        const cliente = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            idade: req.body.idade,
            contato: req.body.contato,
            end: req.body.end,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            queixa: req.body.queixa,
            trombose: req.body.trombose,
            hipotenso: req.body.hipotenso,
            hipertenso: req.body.hipertenso,
            tontura: req.body.tontura,
            diabetico: req.body.diabetico,
            alimentou: req.body.alimentou,
            atividade: req.body.atividade,
            fumante: req.body.fumante,
            ciclo: req.body.ciclo,
            osteoporose: req.body.osteoporose,
            infeccao: req.body.infeccao,
            marcapasso: req.body.marcapasso,
            protese: req.body.protese,
            lesoes: req.body.lesoes,
            botox: req.body.botox,
            cirurgia: req.body.cirurgia,
            epiletico: req.body.epiletico,
            historico: req.body.historico,
            endocrino: req.body.endocrino,
            respiratorio: req.body.respiratorio,
            varizes: req.body.varizes,
            cardiopatia: req.body.cardiopatia,
            refluxo: req.body.refluxo,
            constipacao: req.body.constipacao,
            gastrite: req.body.gastrite,
            urinario: req.body.urinario,
            muscular: req.body.muscular,
            pergunta: req.body.pergunta,
        }
        tblclientes.create(cliente)
        .then(res.redirect('/agendar'))
        .catch((err) => console.log())
    }

    static showAgendar(req, res) {
        res.render('agendar')
    }

    static insertAgenda(req, res) {
        const agenda = {
            cpf: req.body.cpf,
            procedimento: req.body.procedimento,
            profissional: req.body.profissional,
            data: req.body.data,
            horario: req.body.horario,
        }
        tblagenda.create(agenda)
        .then(res.redirect('/'))
        .catch((err) => console.log())
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
        tblagenda.findAll({ raw: true })
        .then((data) => {
            res.render('staffHome', { tblagenda: data })
        })
        .catch((err) => console.log())
    }

    static reagendar(req, res){
        const cpf = req.params.cpf
          tblagenda.findOne({ where: {cpf: cpf}, raw:true})
          .then((data) => {
            res.render('reagendar', {tblagenda: data})
          })
          .catch((err) => console.log())
    }

    static updateAgenda(req, res){
        const cpf = req.body.cpf 
        const agenda = {
            cpf: req.body.cpf,
            procedimento: req.body.procedimento,
            profissional: req.body.profissional,
            data: req.body.data,
            horario: req.body.horario,
        }
        tblagenda.update(agenda, {where: {cpf:cpf}})
        .then(res.redirect('/homestaff'))
        .catch((err) => console.log())
    }

    static removeAgenda(req, res){
        const cpf = req.params.cpf   
        tblagenda.destroy({where: {cpf:cpf}})
        .then(res.redirect('/homestaff'))
        .catch((err) => console.log())
    }
    
    static editCliente(req, res){
        const cpf = req.params.cpf
          tblclientes.findOne({ where: {cpf: cpf}, raw:true})
          .then((data) => {
            res.render('editClient', {tblclientes: data})
          })
          .catch((err) => console.log())
    }  
    
    static updateCliente(req, res){
        const cpf = req.body.cpf 
        const cliente = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            idade: req.body.idade,
            contato: req.body.contato,
            end: req.body.end,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            queixa: req.body.queixa,
            trombose: req.body.trombose,
            hipotenso: req.body.hipotenso,
            hipertenso: req.body.hipertenso,
            tontura: req.body.tontura,
            diabetico: req.body.diabetico,
            alimentou: req.body.alimentou,
            atividade: req.body.atividade,
            fumante: req.body.fumante,
            ciclo: req.body.ciclo,
            osteoporose: req.body.osteoporose,
            infeccao: req.body.infeccao,
            marcapasso: req.body.marcapasso,
            protese: req.body.protese,
            lesoes: req.body.lesoes,
            botox: req.body.botox,
            cirurgia: req.body.cirurgia,
            epiletico: req.body.epiletico,
            historico: req.body.historico,
            endocrino: req.body.endocrino,
            respiratorio: req.body.respiratorio,
            varizes: req.body.varizes,
            cardiopatia: req.body.cardiopatia,
            refluxo: req.body.refluxo,
            constipacao: req.body.constipacao,
            gastrite: req.body.gastrite,
            urinario: req.body.urinario,
            muscular: req.body.muscular,
            pergunta: req.body.pergunta,
        }
        tblclientes.update(cliente, {where: {cpf:cpf}})
        .then(res.redirect('/homestaff'))
        .catch((err) => console.log())
    }






}

    

