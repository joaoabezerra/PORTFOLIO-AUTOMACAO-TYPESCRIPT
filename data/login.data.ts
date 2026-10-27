export interface CenarioLogin {
    esperaSucesso: boolean;
    urlEsperada: RegExp;
    perfil: string;
    email: string;
    senha: string;
    msgEsperada?: string;
}

export const cstLogins: CenarioLogin[] = [
    {
        perfil: 'cliente',
        email: 'user@system.com',
        senha: 'UserPassword123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/,
    },
    {
        perfil: 'admin',
        email: 'admin@system.com',
        senha: 'AdminPassword123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/,
    },
    {
        perfil: 'lojista',
        email: 'lojista@system.com',
        senha: 'SellerPass123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/,
    },
    {
        perfil: 'bloqueado',
        email: 'blocked@system.com',
        senha: 'Blocked123',
        esperaSucesso: false,
        urlEsperada: /login\.html/,
    },
]