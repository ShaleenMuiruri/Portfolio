module.exports = {
  siteTitle: 'Shaleen Muiruri | Software Engineer',
  siteDescription:
        'Shaleen Muiruri is a software engineer based in Nairobi, Kenya  who specializes in building and helping build digital products that make a difference',
  siteKeywords:
        'Shaleen Muiruri, Shaleen, Muiruri, software engineer, front-end engineer, full stack developer, web developer, frontend developer, nairobi, kenya',
  siteUrl: 'https://shaleenmuiruri-portfolio.vercel.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-135464428-1',
  name: 'Shaleen Muiruri',
  location: 'Nairobi, Kenya',
  email: 'shaleenmuiruri@gmail.com',
  github: 'https://github.com/ShaleenMuiruri',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ShaleenMuiruri',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shaleenmuiruri/',
    },
    {
      name: 'Instagram',
      url: '',
    },
    {
      name: 'Twitter',
      url: '',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
      external: false,
    },
    {
      name: 'Experience',
      url: '/#jobs',
      external: false,
    },
    {
      name: 'Work',
      url: '/#projects',
      external: false,
    },
    {
      name: 'Contact',
      url: '/#contact',
      external: false,
    },
    {
      name: 'Blog',
      url: 'https://medium.com/@shaleenmuiruri',
      external: true,
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
