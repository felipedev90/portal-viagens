# Portal Viagens

Aplicação web desenvolvida com **Next.js 15** que simula um portal de viagens, permitindo explorar destinos turísticos pela Europa com páginas individuais para cada destino.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![CSS Modules](https://img.shields.io/badge/Estilização-CSS%20Modules-orange)

**[Ver projeto ao vivo](https://portal-viagens-nu.vercel.app/)**

## Sobre o Projeto

O Portal de Viagens é uma aplicação que lista destinos turísticos europeus e permite visualizar informações detalhadas sobre cada um. O projeto foi desenvolvido com foco em boas práticas de desenvolvimento frontend, utilizando os recursos modernos do Next.js App Router.

### Funcionalidades

- Página inicial com hero section e call-to-action
- Listagem de 8 destinos turísticos em grid responsivo
- Página individual de cada destino com imagem, descrição e navegação
- Layout global com header e footer reutilizáveis
- Navegação SPA com `next/link`
- Design responsivo (desktop, tablet e mobile)

## Tecnologias

- **Next.js 15** — Framework React com App Router e rotas baseadas em arquivos
- **TypeScript** — Tipagem estática
- **CSS Modules** — Estilização com escopo local por componente
- **Lucide React** — Ícones SVG
- **Next/Image** — Otimização automática de imagens

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx              # Layout global (Header + Footer)
│   ├── page.tsx                # Página inicial (/)
│   ├── page.module.css
│   └── destinos/
│       ├── page.tsx            # Listagem de destinos (/destinos)
│       ├── page.module.css
│       └── [id]/
│           ├── page.tsx        # Página dinâmica do destino (/destinos/:id)
│           └── page.module.css
├── components/
│   ├── Header/
│   │   ├── index.tsx
│   │   └── Header.module.css
│   ├── Footer/
│   │   ├── index.tsx
│   │   └── Footer.module.css
│   └── CardDestino/
│       ├── index.tsx
│       └── CardDestino.module.css
├── data/
│   └── destinos.ts             # Tipos e dados dos destinos
└── styles/
    └── globals.css             # Estilos globais e reset CSS
```

## Como Rodar

```bash
# Clone o repositório
git clone https://github.com/felipedev90/portal-viagens.git

# Entre na pasta do projeto
cd portal-viagens

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Conceitos Aplicados

| Conceito                       | Aplicação no Projeto                               |
| ------------------------------ | -------------------------------------------------- |
| **Rotas baseadas em arquivos** | Páginas criadas pela estrutura de pastas em `app/` |
| **Rotas dinâmicas**            | Pasta `[id]` para páginas individuais de destinos  |
| **Server Components**          | Componentes renderizados no servidor por padrão    |
| **CSS Modules**                | Estilização com escopo isolado por componente      |
| **Layout compartilhado**       | Header e Footer via `layout.tsx`                   |
| **Otimização de imagens**      | Componente `next/image` com lazy loading           |

## Autor

**Felipe Augusto**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/felipesilva90/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?logo=github&logoColor=white)](https://github.com/felipedev90)
