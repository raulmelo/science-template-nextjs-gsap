# Next.js com GSAP e Animações

Este projeto é uma aplicação Next.js moderna que utiliza GSAP para criar animações suaves e profissionais.

## 🚀 Instalação

1. Clone o repositório e configura o ambiente para node acima do 16 

2. Instale as dependências:

```bash
npm install
```

## 💻 Rodando o Projeto
Rodando em DEV 

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 📁 Estrutura de Pastas

```
├── app/                    # Arquivos principais da aplicação
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── animations/        # Componentes de animação
│   ├── sections/          # Seções da página
│   └── ui/               # Componentes de UI
├── lib/                   # Utilitários e funções
└── public/               # Arquivos estáticos
```

### Principais Diretórios

- `app/`: Contém os arquivos principais do Next.js 13+ com App Router
- `components/`: Componentes React reutilizáveis
  - `animations/`: Componentes específicos para animações
  - `sections/`: Seções principais da página
  - `ui/`: Componentes de interface do usuário
- `lib/`: Funções utilitárias e configurações

## 🛠️ Build

Para gerar uma versão de produção:

```bash
npm run build
```

Os arquivos de build serão gerados na pasta `out/`.

## 📤 Publicação

Este projeto está configurado para deploy na Netlify. O processo de deploy é automático quando você:

1. Conecta o repositório à Netlify
2. Configura as seguintes opções de build:
   - Build command: `npm run build`
   - Output directory: `out`
   - Environment variables (se necessário)

### Configurações Adicionais

O arquivo `next.config.js` já está configurado para exportação estática com:

```javascript
{
  output: 'export',
  images: { unoptimized: true }
}
```

## 🔧 Tecnologias Principais

- Next.js 13+
- GSAP (GreenSock Animation Platform)
- Tailwind CSS
- TypeScript
- Shadcn/UI

## ⚙️ Personalização

- Cores e temas podem ser ajustados em `app/globals.css`
- Animações podem ser modificadas nos componentes em `components/animations/`
- Componentes de UI podem ser personalizados em `components/ui/`
