// Lógica (filtros), tratativa de erros, regras de negócios.

import * as bruxoModel from "./../models/bruxoModel.js";

export const listarTodos = async (req, res) => {
    try {
        const bruxos = await bruxoModel.encontreTodos();

        if (!bruxos || bruxos.length === 0) {
            res.status(404).json({
                total: 0,
                message: "Não há bruxos na lista",
                bruxos,
            });
        }

        res.status(200).json({
            total: bruxos.length,
            message: "Lista de bruxos",
            bruxos,
        });
    } catch (error) {
        res.status(500).json({
            error: "Eroo interno de servidor",
            details: error.message,
            status: 500,
        });
    }
};

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const bruxo = await bruxoModel.encontreUm(id);

        if (!bruxo) {
            return res.status(404).json({
                error: "Bruxo não encontrado",
                message: "Verifique o id do bruxo",
                id: id,
            });
        }

        res.status(200).json({
            message: "Bruxo encontrado",
            bruxo,
        });
    } catch (error) {
        res.status(500).json({
            error: "Eroo interno de servidor",
            details: error.message,
            status: 500,
        });
    }
};
