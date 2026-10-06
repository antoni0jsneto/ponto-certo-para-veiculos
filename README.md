# Ponto Certo — Agência de Marketing

<p align="center">
  <img src="./public/brand/wordmark.png" alt="Ponto Certo — Agência de Marketing" width="420" />
</p>

> Site institucional da Ponto Certo, agência especializada em marketing digital para lojas de veículos de São Bernardo do Campo e região do ABC Paulista.

O projeto apresenta os serviços da agência e mostra como site, estoque online, anúncios, redes sociais e WhatsApp podem trabalhar em conjunto para gerar oportunidades comerciais para revendas automotivas.

## Sobre o projeto

O site foi desenvolvido como uma landing page responsiva, com conteúdo organizado em uma jornada de apresentação: contextualiza o desafio das lojas, mostra a solução oferecida, apresenta cases, detalha o plano e conduz o visitante aos canais de contato.

### O que o site apresenta

- Estrutura digital integrada para lojas de veículos.
- Criação de site e divulgação de estoque online.
- Gestão de campanhas no Google Ads e Meta Ads.
- Organização da presença no Instagram e Facebook.
- Integração dos canais com o atendimento pelo WhatsApp.
- Cases de clientes da região.
- Plano de Gestão Digital Completa apresentado por **R$ 1.200 por mês**. O orçamento de mídia é definido com a loja e pago diretamente às plataformas.
- Análise gratuita da presença digital e perguntas frequentes.

Os botões de contato direcionam para conversas com mensagens pré-preenchidas no WhatsApp. O site também disponibiliza o perfil da agência no Instagram.

## Tecnologias

- [Next.js 16](https://nextjs.org/) com App Router
- [React 19](https://react.dev/) e TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) para ícones
- [Vercel Analytics](https://vercel.com/analytics) para analytics em produção
- Google Tag Manager opcional para gerenciamento de tags e eventos

## Executar localmente

### Pré-requisitos

- Node.js 20.9 ou superior
- pnpm 12.3.4, conforme definido em `package.json`

Ative o Corepack, caso ainda não esteja disponível:

```bash
corepack enable
```

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento. |
| `pnpm build` | Gera a versão otimizada para produção. |
| `pnpm start` | Inicia a aplicação compilada; execute `pnpm build` antes. |

## Configuração

### Domínio público

Copie `.env.example` para `.env.local` e configure a URL pública do site:

```env
NEXT_PUBLIC_SITE_URL=https://www.seu-dominio.com.br
```

Informe somente a origem real de produção, sem caminho, parâmetros ou fragmento. Essa configuração habilita a URL canônica, os metadados absolutos de compartilhamento, os dados estruturados da organização e o sitemap. Sem ela, recursos que exigem o domínio público são omitidos; não é usado um domínio de exemplo como URL canônica.

### Google Tag Manager (opcional)

O site pode carregar um contêiner do Google Tag Manager quando `NEXT_PUBLIC_GTM_ID` estiver configurado:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
```

Substitua o valor pelo ID do contêiner da agência. Sem essa variável, o Google Tag Manager não é carregado. Os eventos de interação são enviados ao `dataLayer` quando ele está disponível; entre eles, cliques nos links de WhatsApp e Instagram e visualizações das seções de cases e investimento.

O Vercel Analytics é incluído no ambiente da Vercel e não é carregado em desenvolvimento local nem em outras plataformas.

## Estrutura do projeto

```text
app/
  globals.css         Estilos globais, tema e tokens de cor
  layout.tsx          Layout raiz, fontes, metadados e analytics
  page.tsx            Composição da landing page
  robots.ts           Regras para rastreadores
  sitemap.ts          Sitemap XML
components/
  *-section.tsx       Seções e conteúdo da página
  site-header.tsx     Navegação responsiva
  site-footer.tsx     Rodapé e canais de contato
  structured-data.tsx Dados estruturados Schema.org
  tracked-link.tsx    Links com suporte ao rastreamento de eventos
  reveal.tsx          Animações de entrada e eventos de visualização
lib/
  contact.ts          WhatsApp, Instagram e mensagens dos links
  site-url.ts         Validação e resolução do domínio público
  tracking.ts         Tipos e envio de eventos ao dataLayer
  utils.ts            Utilitários compartilhados
.env.example          Modelo de configuração local e de produção
public/
  brand/              Logotipos, símbolos e imagem de compartilhamento
  cases/              Imagens dos cases
  favicon.png         Favicon circular
```

## Manutenção do conteúdo

- **Telefone, Instagram e mensagens de contato:** `lib/contact.ts`.
- **Serviços e respectivas descrições:** `components/solution-section.tsx`.
- **Cases e imagens associadas:** `components/cases-section.tsx` e `public/cases/`.
- **Plano, valor e itens inclusos:** `components/pricing-section.tsx`.
- **Perguntas frequentes:** `components/faq-section.tsx`.
- **Título, descrição, compartilhamento social, fontes e ícones:** `app/layout.tsx`.
- **Cores, fontes aplicadas e estilos globais:** `app/globals.css`.
- **ID e nomes dos eventos rastreados:** `components/google-tag-manager.tsx` e `lib/tracking.ts`.

## Publicação

O projeto pode ser publicado na Vercel ou em outro ambiente compatível com Next.js:

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

Ao publicar, configure `NEXT_PUBLIC_SITE_URL` com o domínio canônico e, se quiser ativar o Google Tag Manager, também `NEXT_PUBLIC_GTM_ID` nas variáveis de ambiente do ambiente de produção.

## Licença

Este repositório ainda não declara uma licença. Os direitos de uso e redistribuição devem ser definidos pelo responsável pelo projeto.
