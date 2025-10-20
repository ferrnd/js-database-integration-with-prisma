// Fazemos a consulta para o banco de dados.
//Comandos que abstrai a query -> mas ainda sim é QUERY para o BD.

//Importar o prima client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Criar exportando a variável -> findAll que vai ser o SELECT * FROM bruxos;

export const encontreTodos = async () => {
    //SELECT * FROM bruxos;
    return await prisma.bruxo.findMany({ orderBy: { nome: "asc" } });
};

export const encontreUm = async () => {
    //SELECT * FROM bruxos WHERE id = 1;
    return await prisma.bruxo.findUnique({
        where: { id: Number(id) },
    });
};
