import { getSession } from "next-auth/client"

export default async(req, res) => {
    const session = await getSession({ req })


if(session) {
    res.send({
        content: 'Bem vindo a pagina secreta'
    })
} else {
    res.send({
        error: 'vc precisa logar para entrar nesta rota'
    })
}
}