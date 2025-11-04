import express from 'express'
import BD from '../db.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const result = await BD.query(
            "SELECT id_professor, nome_professor, telefone,formacao " +
            "FROM professores ORDER BY nome_professor"
        );

        res.render("professores/lista", {professores: result.rows});

   
    } catch(erro) {
        console.error("Erro ao listar professores")
        res.render("professores/lista",{
            professores:[],
            mensagem: "Erro ao listar professores"
        })
    }
})
    router.get("/novo",(req, res) => {
        res.render("professores/criar");
    });

    router.post("/novo", async (req, res) => {
        try {
            const {nome_professor, telefone, formacao} = req.body;
            await BD.query(
                'INSERT INTO professores (nome_professor, telefone, formacao) VALUES ($1, $2, $3)',
                [nome_professor, telefone, formacao]
            );
            res.redirect("/professores");
            } catch (erro) {
            console.error("Erro ao criar o professor",erro);
            res.render("professores/criar",
                {mensagem: "Erro ao criar o professor"});
            }

    });
    router.post("/:id/editar", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome_professor, telefone, formacao} = req.body;
        await BD.query(
            `UPDATE professores SET nome_professor = $1, telefone = $2, formacao = $3
            WHERE id_professor = $4`,
            [nome_professor, telefone, formacao, id]
        );
        res.redirect("/professores");
    } catch (erro) {
        console.error("Erro ao editar professores", erro);
        res.redirect("/professores");
    }
});

    router.post("/:id/deletar", async (req, res) =>{
    try{
        const{id} = req.params;
        await BD.query(`DELETE FROM professores WHERE id_professor = $1`

        ,[id]);
        res.redirect("/professores");
   
    }catch (erro){
        console.error("Erro ao deletar professor", erro);
        res.redirect("/professores");
    }    
});



export default router;