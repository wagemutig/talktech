// Blog posts, newest first. Each post's body lives in src/pages/blog/<slug>.astro.
export const posts = [
  {
    slug: 'hackastone-2026',
    date: '2026-10-31',
    title: 'TALK-TECH gewinnt den 1. Preis am hackAstone 2026',
    titleEn: 'TALK-TECH wins first prize at hackAstone 2026',
    excerpt: 'Am Grand Final in Amsterdam setzte sich unsere Simulation «Mr. Barker visits» gegen Teams aus der ganzen Welt durch.',
    excerptEn: 'At the Grand Final in Amsterdam, our simulation «Mr. Barker visits» came out on top against teams from around the world.',
    image: '/images/hackastone-2026-first-prize.webp',
  },
];

// Awards and press for the home page.
export const awards = [
  { name: 'hackAstone 2026', result: '1. Preis · Grand Final Amsterdam', resultEn: '1st prize · Grand Final Amsterdam', post: 'hackastone-2026' },
];
export const media = [
  {
    outlet: 'hackAstone News',
    title: 'Congratulations to team TALK-TECH AI from Zurich University of Teachers Education (Switzerland), winner of the HACKaSTONE 2026 First Prize',
    date: '2026-10-31',
    url: 'https://hackastone.varteledu.com/2026/10/31/congratulations-to-team-talk-tech-ai-from-zurich-university-of-teachers-education-switzerland-winner-of-the-hackastone-2026-first-prize/',
  },
];
