class Produto {

    constructor(p){
        this.id = p.id;
        this.nome = p.nome;
        this.descricao = p.descricao;
        this.preco = p.valor;
        this.foto = p.foto;
        this.quantidade = p.quantidade;
    }

    create(){
        return `INSERT INTO produto VALUE(${this.id}, '${this.nome}', '${this.descricao}', ${this.preco}, '${this.foto}',${this.quantidade})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM produto`
        else
            return `SELECT * FROM produto WHERE id = ${this.id}`
    }

    update()  {
        return `UPDATE produto SET nome = '${this.nome}', descricao = '${this.descricao}', 'foto = ${this.foto}',quantidade = ${this.quantidade},preco = ${this.preco} WHERE id = ${this.id}`
    }
    delete() {
        return `DELETE FROM produto WHERE id = ${this.id}`
    }
}

module.exports = Produto