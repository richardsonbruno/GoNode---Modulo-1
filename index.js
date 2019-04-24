const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const users = [
  'Richardson Bruno',
  'Tais Natielle',
  'Adileide Novaes Ramos',
  'Carlos Roberto de Carvalho'
]

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.nome)
  return res.redirect('/')
})

app.listen(3000)
