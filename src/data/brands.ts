/**
 * ─────────────────────────────────────────────────────────────
 *  CONTEÚDO DO PORTFÓLIO
 * ─────────────────────────────────────────────────────────────
 *  Para adicionar um e-mail novo:
 *   1. Exporte o e-mail do Figma em JPG ou PNG (2x, largura 1200px).
 *   2. Salve em  src/assets/emails/<slug-da-marca>/  (ex.: 04.jpg).
 *   3. Adicione um item na lista "emails" da marca abaixo,
 *      com  image: '04.jpg'.
 *
 *  Para adicionar uma marca nova: crie a pasta com as imagens e
 *  copie um bloco { ... } inteiro desta lista, mudando o slug.
 *  A página da marca e o card na home são criados automaticamente.
 * ─────────────────────────────────────────────────────────────
 */

export interface Highlight {
  title: string;
  text: string;
}

export interface Email {
  /** nome do arquivo dentro de src/assets/emails/<slug>/ */
  image: string;
  /** tipo do e-mail (aparece como etiqueta) */
  type: string;
  title: string;
  /** como o e-mail é disparado: flow, campanha, segmento… */
  trigger?: string;
  subject?: string;
  preheader?: string;
  /** o objetivo, em uma ou duas frases */
  goal: string;
  /** as principais escolhas de design/conteúdo */
  choices: string[];
}

export interface Brand {
  slug: string;
  name: string;
  segment: string;
  /** frase curta que aparece no card da home */
  tagline: string;
  /** parágrafo de abertura da página da marca */
  intro: string;
  /** 3 pontos principais sobre a marca */
  highlights: [Highlight, Highlight, Highlight];
  /** resumo da direção visual dos e-mails */
  visual: string;
  /** cores principais usadas nos e-mails (hex) */
  palette: string[];
  emails: Email[];
}

export const brands: Brand[] = [
  {
    slug: 'hikoco',
    name: 'HIKOCO',
    segment: 'Beauty · K-beauty',
    tagline: 'K-beauty from Seoul, delivered across New Zealand.',
    intro:
      'A New Zealand e-commerce store for Korean skincare and makeup. The challenge was to build trust (authentic products, local delivery) while keeping the launch-day energy K-beauty fans expect.',
    highlights: [
      {
        title: 'Curated in Korea',
        text: 'Picks the newest launches and best-sellers from Seoul and ships them in New Zealand, so customers don’t have to import.',
      },
      {
        title: 'Trust is everything',
        text: '100% authentic, sourced from official brands and distributors. With imported beauty, authenticity is the biggest purchase objection.',
      },
      {
        title: 'Loyalty and shipping',
        text: 'Koco Points on every dollar and free shipping over $59 are the levers for a bigger basket.',
      },
    ],
    visual:
      'A clean black-and-white base, like a skincare shelf, with the brand’s hot pink saved for what matters: labels, numbers and buy buttons.',
    palette: ['#111111', '#E8175D', '#FCD4D2', '#F7F7F7'],
    emails: [
      {
        image: '01.jpg',
        type: 'Welcome',
        title: 'Your skin’s new favourite place',
        trigger: 'Klaviyo flow · Welcome Series #1',
        goal: 'Introduce HIKOCO to new subscribers and turn the sign-up into a first order with 5% off.',
        choices: [
          'Product-texture hero: the first impression is sensory, like seeing the serum on skin.',
          'Coupon in a pink block with a dashed border, like a cut-out voucher, so it stands out.',
          'Right after the offer, 3 pillars (authentic, free shipping, points) answer doubts before they come up.',
          '“Our community’s most-loved” grid gives a starting point to anyone who doesn’t know where to begin.',
          'KOCOBOX at the end as an upsell to a ready-made kit.',
        ],
      },
      {
        image: '02.jpg',
        type: 'Campaign',
        title: 'Advent Calendar 2026',
        trigger: 'Klaviyo campaign · seasonal launch',
        goal: 'Launch a limited holiday edition and drive quick sales by showing its value in seconds.',
        choices: [
          'The product fills the whole hero: the box illustration is the headline.',
          'A numbers block (12 products · $441+ value · $199) shows the deal without reading.',
          'A numbered 01–03 list explains why it’s worth it: full sizes, the best of 2026, in-house design.',
          'Urgency section with real stock (“Only 250 left”) and a repeated CTA.',
          'Cross-sell of the Blind Box and stocking stuffers to raise the order value.',
        ],
      },
      {
        image: '03.jpg',
        type: 'Abandoned cart',
        title: 'Your glow-up is waiting in your cart',
        trigger: 'Klaviyo flow · Started Checkout',
        goal: 'Bring back shoppers who started checkout but didn’t finish.',
        choices: [
          'Headline and button before the image: recipients already know the brand, so the action comes first.',
          'Dynamic cart (items, quantities and subtotal) pulled from Klaviyo.',
          'The “You’ve unlocked FREE NZ shipping!” note turns shipping into a reason to buy now.',
          'Full-width pink CTA, followed by guarantees and recommendations to complete the routine.',
        ],
      },
    ],
  },
  {
    slug: 'daise',
    name: 'Daise',
    segment: 'Beauty · Bodycare',
    tagline: 'Fragrance and bodycare that match your mood.',
    intro:
      'A bodycare and fragrance brand for Gen Z, with a product for every mood. The emails had to be as fun as the brand without losing a clear path to purchase.',
    highlights: [
      {
        title: 'A product for every mood',
        text: 'Peachy, Sunny, Happy, Lowkey… each line is a state of mind. Customers buy a feeling, not just a scent.',
      },
      {
        title: 'Self-care made fun',
        text: 'A Gen Z audience: the tone is playful, experimental and never intimidating. Beauty as play.',
      },
      {
        title: 'A bold identity',
        text: 'Lilac-to-pink gradient, neon yellow, an asterisk and flowers: elements that are easy to spot on any channel.',
      },
    ],
    visual:
      'A lilac → pink gradient, a giant neon-yellow logo, ticker bars at the top and lilac serif headlines. Pill buttons, echoing the flower-shaped products.',
    palette: ['#C8A8E7', '#F0A1BA', '#FFFF3F', '#B1BDEF'],
    emails: [
      {
        image: '01.jpg',
        type: 'Welcome',
        title: 'Wellcome to the Daise club',
        trigger: 'Klaviyo flow · Welcome Series',
        goal: 'Make new subscribers feel part of a club from the very first email and nudge the first purchase with 10% off.',
        choices: [
          'Giant logo over the photo and ticker bars: the brand’s energy lands before any copy.',
          'Product shot with tags (“derm tested”, “cruelty free”) shows the benefits without long text.',
          'Coupon inside a gradient card, with a clear code and expiry.',
          '“The ones people reorder” as social proof: the favorites of existing customers.',
          'The brand manifesto at the end reinforces the “why” before the footer.',
        ],
      },
      {
        image: '02.jpg',
        type: 'Abandoned cart',
        title: 'Psst… you left something cute behind',
        trigger: 'Klaviyo flow · Abandoned Cart',
        goal: 'Recover the cart while keeping the brand’s light tone, with no pressure.',
        choices: [
          'Copy that sounds like a friend reminding you (“No rush, we saved everything for you”).',
          'Dynamic cart inside the gradient card, with a “Checkout now” button.',
          'A photo with trust badges right after the cart to clear the last doubt.',
          '“Complete the vibe” suggests products from the same line to grow the order.',
          'A human sign-off: “a real human will help 💛”.',
        ],
      },
      {
        image: '03.jpg',
        type: 'Product launch',
        title: 'Peachy Daise Body Mist',
        trigger: 'Klaviyo campaign · Product Spotlight',
        goal: 'Spotlight a single product and explain something you can’t experience through email: its scent.',
        choices: [
          'Scent notes in 3 illustrated circles (berry, mandarin, good mood): the fragrance becomes an image.',
          'A “How to get your glow on” guide in 3 numbered steps.',
          '“Match your mist” builds the full routine and raises the order value.',
          '“Not feeling peachy today?” sends anyone who didn’t connect to the other moods, without losing the click.',
        ],
      },
    ],
  },
  {
    slug: 'misfits-market',
    name: 'Misfits Market',
    segment: 'Grocery · Delivery',
    tagline: 'An online grocery store rescuing food from waste.',
    intro:
      'An online grocery store selling organic produce, small-maker goods and “ugly” food that supermarkets turn down. The emails had to explain the model, show the mission and sell, all with a sense of humor.',
    highlights: [
      {
        title: '“Ugly” food, same taste',
        text: 'Too big, slightly blemished or in new packaging: retailers say no, Misfits sells it for less.',
      },
      {
        title: 'A mission with numbers',
        text: 'Over 200 million pounds of food saved from waste. Impact is part of the value proposition.',
      },
      {
        title: 'No commitment',
        text: 'Customers shop what they want, skip weeks anytime and get a money-back guarantee.',
      },
    ],
    visual:
      'Cream, mustard yellow and leaf green, like a farmers’ market. Rounded cards with cut-out product photos and simple icons to explain how it works.',
    palette: ['#FFF9EB', '#F2C14E', '#D6E1B7', '#2B2B2B'],
    emails: [
      {
        image: '01.jpg',
        type: 'Welcome',
        title: 'Groceries just got better',
        trigger: 'Klaviyo flow · Welcome Series (1 of 3) · joined list, no order',
        subject: 'Welcome to the Misfits 🥕 your first order perk is inside',
        preheader: 'Groceries sourced for flavor, not appearances.',
        goal: 'Explain what Misfits is and convert the first order with $10 off orders over $50.',
        choices: [
          'A mosaic of colorful cards shows the 3 pillars: fresh produce, less-processed foods and small makers.',
          'A large yellow coupon, the most visible element in the email.',
          '“How it works” in 3 steps with icons answers questions about the subscription model.',
          '“Why ugly?” with the misshapen-tomato GIF explains the mission with humor.',
          'Customer reviews close with social proof.',
        ],
      },
      {
        image: '02.jpg',
        type: 'Campaign',
        title: 'Skip the grocery run. Keep the feast.',
        trigger: 'Klaviyo campaign · Thanksgiving · active subscribers + engaged 60 days',
        subject: 'Skip the Thanksgiving grocery run 🦃',
        preheader: 'Everything for the feast, delivered. No lines, no parking lots.',
        goal: 'Position Misfits as the easy solution for Thanksgiving dinner.',
        choices: [
          'A headline with the direct benefit: skip the crowded store, keep the celebration.',
          'A real customer haul photo, more authentic than a stock image.',
          'The “Fresh finds for every course” grid organizes shopping around the menu.',
          'An impact number (200 million pounds) gives one more reason to choose the brand.',
          'Refer-a-friend tied to the moment: hosts can share the perk with family.',
        ],
      },
      {
        image: '03.jpg',
        type: 'Abandoned cart',
        title: 'Don’t leave your groceries hanging',
        trigger: 'Klaviyo flow · Started Checkout · 3h delay',
        subject: 'Your groceries are still waiting 🍅',
        preheader: 'We saved your cart. Fresh finds, delivered to your door.',
        goal: 'Recover the order and remove the main objection: fear of committing to a subscription.',
        choices: [
          'The “misshapen” tomato GIF at the top grabs attention and is instantly on-brand.',
          'Dynamic cart with photos, variants and subtotal.',
          '“No commitment: skip a week or cancel anytime” right under the button.',
          'Guarantees in 3 icons and a review with a real haul photo.',
        ],
      },
    ],
  },
  {
    slug: 'bloedstone',
    name: 'Bloedstone',
    segment: 'Jewelry · Menswear',
    tagline: 'Handmade signet rings from Los Angeles.',
    intro:
      'A Los Angeles men’s jewelry brand specializing in signet rings with one-of-a-kind stones. The communication had to be elegant and understated, for a man who has often never worn jewelry.',
    highlights: [
      {
        title: 'Every stone is unique',
        text: 'Stones come from auctions and estate sales, so no two rings are alike. The scarcity is real, not invented.',
      },
      {
        title: 'Made to last generations',
        text: 'Recycled sterling silver and solid gold, handmade in LA, to age with him and one day be passed down.',
      },
      {
        title: 'For first-time wearers',
        text: '“Nothing loud, nothing costume.” The tone is calm and confident, easing men’s hesitation about jewelry.',
      },
    ],
    visual:
      'Parchment beige, forest green and oxblood red on the main buttons. A classic serif with a calligraphic touch, Roman numerals and ornaments that recall an antique shop.',
    palette: ['#EFE8D5', '#2F3B2C', '#9E3B30', '#E6E0C6'],
    emails: [
      {
        image: '01.jpg',
        type: 'Welcome',
        title: 'Welcome to the Gem & Mineral Society',
        trigger: 'Klaviyo flow · Welcome Series · joined list',
        subject: 'Welcome to the Gem & Mineral Society',
        preheader: 'Your 10% is inside, plus the story behind every stone.',
        goal: 'Turn a sign-up into a sense of belonging and encourage the first piece with 10% off.',
        choices: [
          'The list becomes a “Society” and customers become “members”: exclusive without being snobby.',
          'A note from the founders with a handwritten signature makes the brand human.',
          'Pillars in Roman numerals (sustainable, ethical, 1% for the planet).',
          '“Fieldnotes” for first-time ring wearers, with a free ring sizer to remove sizing worries.',
        ],
      },
      {
        image: '02.jpg',
        type: 'Campaign',
        title: 'The Heirloom Gift Guide',
        trigger: 'Klaviyo campaign · engaged 90 days + gift buyers',
        subject: 'A gift he’ll pass down',
        preheader: 'The Heirloom Gift Guide: signets, bands and chains made in LA.',
        goal: 'Sell holiday gifts to people shopping for him, built around the idea of an heirloom.',
        choices: [
          '“A gift he’ll pass down”: the gift gains emotional, long-term value.',
          '“Every stone tells a story” with a stone texture and 3 benefits in Roman numerals.',
          'A testimonial in the “Member Ledger”, on a dark green block, to give social proof weight.',
          '“Gift with confidence” solves the gift-giver’s biggest question: size (ring sizer or gift card).',
          'An invitation to visit the studio, for those who’d rather choose in person.',
        ],
      },
      {
        image: '03.jpg',
        type: 'Abandoned cart',
        title: 'Your ring is still waiting',
        trigger: 'Klaviyo flow · Started Checkout · 4h delay',
        subject: 'Your ring is still waiting',
        preheader: 'We saved your cart. Each stone is one of a kind.',
        goal: 'Recover a high-ticket purchase calmly and confidently, without an aggressive discount.',
        choices: [
          'Honest urgency: every stone is unique, so the ring may not come back.',
          'A full-width oxblood button, the strongest color in the email.',
          'An offer to help with sizing right below (“just reply to this email”).',
          'Lifestyle photo, quality pillars and a testimonial before the recommendations.',
        ],
      },
    ],
  },
  {
    slug: 'anthropologie',
    name: 'Anthropologie',
    segment: 'Fashion · Home · Lifestyle',
    tagline: 'Fashion, home and wedding with a curator’s eye.',
    intro:
      'A lifestyle retailer bringing together clothing, home décor and wedding (BHLDN). The emails had to feel like a magazine, editorial and welcoming, while showing the full range of the brand.',
    highlights: [
      {
        title: 'One world, many categories',
        text: 'Clothing, dresses, home and wedding live under one brand. Showing that range is part of the job.',
      },
      {
        title: 'Curation that travels',
        text: '“Found, not bought” pieces sourced by buyers around the world. Every item has a story.',
      },
      {
        title: 'An editorial experience',
        text: 'Store windows handmade by local artists and magazine-like communication. The brand sells a lifestyle.',
      },
    ],
    visual:
      'Off-white, chocolate brown and a soft pink. An elegant serif with italics, widely spaced uppercase labels and plenty of breathing room, letting photography lead.',
    palette: ['#F7F2EC', '#553221', '#F4A9C0', '#1E1E1E'],
    emails: [
      {
        image: '01.jpg',
        type: 'Welcome',
        title: 'Hello, you. Let’s go somewhere unexpected.',
        trigger: 'Klaviyo flow · Welcome Series',
        goal: 'Introduce every side of the brand and encourage the first purchase with 15% off.',
        choices: [
          'An editorial photo hero with the headline over it, like a magazine cover.',
          '“Hello, you.” in italics makes the welcome personal and warm.',
          'Coupon on a brown block: the strongest contrast in the email goes to the offer.',
          'A 2×2 category grid (dresses, clothing, home, wedding) shows the brand goes beyond fashion.',
          'A home feature and Instagram/Pinterest inspiration keep the relationship going after the purchase.',
        ],
      },
      {
        image: '02.jpg',
        type: 'Campaign',
        title: 'The Holiday Shop',
        trigger: 'Klaviyo campaign · holiday season',
        goal: 'Sell the holiday collection by telling a story, not just listing products.',
        choices: [
          'The “On my way… to the holiday party” narrative guides the read from start to finish.',
          'Structured in chapters: I. The look, II. The table, III. The gift (fashion, home and gifts).',
          'Each chapter uses its own format (grid, image + text, product row), giving the scroll a rhythm.',
          'Closes with the physical store windows, taking the experience offline.',
        ],
      },
      {
        image: '03.jpg',
        type: 'Abandoned cart',
        title: 'Your finds are waiting',
        trigger: 'Klaviyo flow · Started Checkout',
        goal: 'Remind shoppers of forgotten items with elegance, without breaking the brand’s tone.',
        choices: [
          '“Good things are worth a second look”: a gentle reminder with light scarcity (“some favorites are limited”).',
          'Dynamic bag with photo, variant and subtotal.',
          'A brown band with 3 reassurances: easy returns, secure checkout and support.',
          '“Complete the look” suggests accessories and beauty to grow the order.',
        ],
      },
    ],
  },
];
