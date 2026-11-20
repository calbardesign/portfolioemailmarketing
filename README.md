# Portfólio de E-mail Marketing · Gabriela Calbar

Site estático feito em [Astro](https://astro.build), pronto para publicar na Vercel.

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project → Import** o repositório.
3. A Vercel detecta Astro sozinha (build `npm run build`, saída `dist`). É só clicar em **Deploy**.

Cada novo `git push` publica o site de novo automaticamente.

## Adicionar um e-mail novo

1. No Figma, exporte o frame do e-mail em **JPG, 2x** (fica com 1200px de largura).
2. Salve em `src/assets/emails/<marca>/`, por exemplo `src/assets/emails/daise/04.jpg`.
3. Em `src/data/brands.ts`, dentro da marca, adicione um item em `emails`:

```ts
{
  image: '04.jpg',
  type: 'Campaign',
  title: 'Título do e-mail',
  trigger: 'Campanha Klaviyo · segmento',   // opcional
  subject: 'Assunto do e-mail',              // opcional
  preheader: 'Preheader',                    // opcional
  goal: 'O objetivo em uma ou duas frases.',
  choices: [
    'Escolha de design 1',
    'Escolha de design 2',
  ],
},
```

As imagens são otimizadas (WebP) automaticamente no build.

## Adicionar uma marca nova

1. Crie a pasta `src/assets/emails/<slug-da-marca>/` com as imagens.
2. Em `src/data/brands.ts`, copie um bloco de marca inteiro e troque `slug`, `name`, textos, `palette` e `emails`.

A página `/<slug-da-marca>` e o card na home são criados sozinhos.

## Rodar no computador (opcional)

```bash
npm install
npm run dev
```

Abra http://localhost:4321.

---

Projeto conceitual, criado apenas para fins de portfólio.
