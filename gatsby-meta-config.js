module.exports = {
  title: `varad-blogs`,
  description: `Varad's Blog Site`,
  language: `en`,
  siteUrl: `https://varad-blogs.vercel.app`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `Varad`,
    bio: {
      role: ``,
      description: ['Software Engineer', 'passionate Artist'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/pyVarad`,
      linkedIn: ``, // `https://www.linkedin.com/in/varadag`,
      email: ``, // `infocus.varad@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.02 ~',
        activity: '',
        links: {
          post: '/iitmbs',
          github: 'https://github.com/pyVarad/portfolio-app',
          demo: 'https://varad-blogs.vercel.app/',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Varad Blogs',
        description:'.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://varad-blogs.vercel.app',
        },
      },
    ],
  },
};
