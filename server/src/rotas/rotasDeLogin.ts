import { NextFunction, Request, Response, Router } from "express";

interface Requisicao extends Request {
    body: { [chave: string]: string | undefined };
}

const requerAutenticacao = (req: Request, ret: Response, proxima: NextFunction): void => {
    if (req.session && req.session.logado) {
        proxima();
        return;
    }
    ret.status(403);
    ret.send("SECRETO!! FAÇA LOGIN ANTES!!");
};

const router = Router();

router.get("/", (req: Request, ret: Response): void => {
    if (req.session && req.session.logado) {
        ret.send(`
            <div>
                <h3>Logado!</h3>
                <a href="/logout">Sair?</a>
            </div>
        `);
    } else {
        ret.send(`
            <div>
                <h2>VOCÊ NÃO ESTÁ LOGADO!!</h2>
                <a href="/login">Quero logar!!</a>
            </div>
        `);
    }
});

router.get("/login", (req: Request, ret: Response): void => {
    ret.send(`
        <form method="POST">
            <h1>Bem vindo!</h1>
            <div>
                <label>Email:</label>
                <input name="email" />
            </div>
            <div>
                <label>Senha:</label>
                <input name="senha" type="password" />
            </div>
            <button>Enviar</button>
        </form>
    `);
});

router.post("/login", (req: Requisicao, ret: Response): void => {
    const { email, senha } = req.body;

    if (email && senha && email === "a@b.com" && senha === "123") {
        req.session = { logado: true };
        ret.redirect("/");
    } else {
        ret.send("Dados de login inválidos!");
    }
});

router.get("/logout", (req: Requisicao, ret: Response): void => {
    req.session = undefined;
    ret.redirect("/");
});

router.get("/protegido", requerAutenticacao, (req: Requisicao, ret: Response): void => {
    ret.send("Sssshhhh!!! Dados secretos!!");
});

export { router };
