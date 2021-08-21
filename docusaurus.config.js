// GitHub Settings
const vars = require('./variables')

// Docusaurus Config
module.exports = {
  title: "OT-OCN Developer Portal",
  tagline: "let's build better",
  url: "https://developers.otocn.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "otocn-foundation",
  projectName: "developer-portal",
  customFields: {
    repository: `${vars.repository}`,
    branch: `${vars.branch}`,
  },
  themeConfig: {
    // Docs Sidebar
    hideableSidebar: true,

    // Additional Language Syntax Highlighting
    prism: {
      additionalLanguages: ['csharp', 'php'],
    },
    
    // Dark / Light Mode
    colorMode: {
      disableSwitch: false,
      // with true defaultMode is overridden by user system preferences.
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "☀️",
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },

    // Announcement Bar
    // id: always change it when changing the announcement
    // backgroundColor: use #FD7575 for warnings and #2AA18A for announcements
    announcementBar: {
      id: "support_se2", // Any value that will identify this message + increment the number every time to be unique
      content:
        `<strong>Join the OT-OCN Stack Exchange and get your questions answered today. ⭐️<a target="_blank" rel="noopener noreferrer" href="https://otocn.stackexchange.com">Join us!</a></strong>`,
      backgroundColor: "#2AA18A", 
      textColor: "#FFFFFF", // Use #FFFFFF
      isCloseable: true, // Use true
    },

    // Meta Image that will be used for your meta tag, in particular og:image and twitter:image
    // Relative to your site's "static" directory, cannot be SVGs.
    image: "img/og-developer-portal.png",
    metadatas: [{ name: "twitter:card", content: "summary" }],

    // Algolia Search
    algolia: {
      appId: "6QH8YVQXAE",
      apiKey: "6033c09f3af6454c8c25efce0460b84a",
      indexName: "developer-portal",
      contextualSearch: true,
    },

    // Navbar title, logo and items
    navbar: {
      hideOnScroll: false,
      title: "Developers",
      logo: {
        alt: "OT-OCN Logo",
        src: "img/otocn-black.svg",
        srcDark: "img/otocn-white.svg",
      },

      items: [
        {
          to: "tools",
          label: "Tools",
          position: "left",
        },
        {
          to: "showcase",
          label: "Showcase",
          position: "left",
        },
        {
          to: "docs/get-started/testnets-and-devnets",
          label: "Testnets",
          position: "left",
        },
        {
          to: "blog/",
          label: "Dev Blog",
          position: "left",
        },
        {
          href: "https://docs.otocn.org/en/latest/",
          label: "Docs",
          position: "left",
        },
        {
          href: `${vars.repository}`,
          position: "right",
          className: "header-github-link",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Developer Portal",
          items: [
            {
              label: "Contributors",
              to: "docs/portal-contributors/",
            },
            {
              label: "How to Contribute",
              to: "docs/portal-contribute/",
            },
            {
              label: "Style Guide",
              to: "docs/portal-style-guide",
            },
            {
              label: "Suggest Content",
              href: "https://github.com/otocn-foundation/developer-portal/discussions/161",
            },
            {
              label: "Raise an Issue",
              href: "https://github.com/otocn-foundation/developer-portal/issues",
            },
          ],
        },
        {
          title: "Developer Community",
          items: [
            {
              label: "Stack Exchange",
              href: "https://otocn.stackexchange.com",
            },
            {
              label: "OT-OCN Forum",
              href: "https://forum.otocn.org/c/developers/29",
            },
            {
              label: "More",
              to: "docs/get-started/otocn-developer-community",
            },
          ],
        },
        {
          title: "More about OT-OCN",
          items: [
            {
              label: "OT-OCN Enterprise",
              href: "https://otocn.org/enterprise",
            },
            {
              label: "OT-OCN Foundation",
              href: "https://www.otocnfoundation.org",
            },
            {
              label: "Development Updates",
              href: "https://otocnupdates.com",
            },
            {
              label: "Ouroboros Protocol",
              href: "https://otocn.org/ouroboros/",
            },
          ],
        },
      ],

      // Let's use the copyright footer for terms and privacy policy for now
      copyright: `<a href="https://otocnfoundation.org/en/terms-and-conditions" target="_blank" rel="noopener noreferrer" class="footer__link-item">Terms</a> | <a href="https://otocnfoundation.org/en/privacy" target="_blank" rel="noopener noreferrer" class="footer__link-item"">Privacy Policy</a>`,
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'GTM-5NM3NX4',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ]
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `${vars.repository}/edit/${vars.branch}`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `${vars.repository}/edit/${vars.branch}`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
