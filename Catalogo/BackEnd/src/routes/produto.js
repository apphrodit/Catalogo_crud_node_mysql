const express = require("express");
const router = express.Router();

const Produto = require('../controllers/produto');

router.post('/produto/criar', Produto.criar);
router.get('/produto/listar', Produto.listar);
router.get('/produto/listar/:id', Produto.listar);
router.put('/produto/alterar', Produto.alterar);
router.delete('produto/excluir/:id', Produto.excluir);

module.exports = router