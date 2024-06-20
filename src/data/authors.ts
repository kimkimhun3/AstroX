export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Joshua Wood",
    slug: "joshua-wood",
    image: "./src/assets/authors/joshua.webp",
    bio: "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
  },
  {
    name: "Erika Oliver",
    slug: "erika-oliver",
    image: "./src/assets/authors/erika.webp",
    bio: "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },
  {
    name: "Satoru Gojo",
    slug: "satoru-gojo",
    image: "./src/assets/authors/gojo.png",
    bio: "Mario is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity.",
  },
  {
    name: "Panha Bot",
    slug: "panha-bot",
    image: "./src/assets/authors/bot.jpg",
    bio: "Panha Bot is a Staff Engineer specialising in Frontend at Quad, as well as being a co-founder of Acme and the content management system Sanity.",
  },
  {
    name: "Kim Hoon",
    slug: "kim-hoon",
    image: "./src/assets/authors/kim.jpg",
    bio: "Hoooon is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity.",
  },
  {
    name: "Seng hout",
    slug: "seng-hout",
    image: "https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg",
    bio: "Hoooon is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity.",
  }
];


