const docItems = [
  {
    key: "concepts",
    title: "Concepts",
    children: [
      { key: "introduction", title: "Introduction", link: "/introduction" },
      {
        key: "developer",
        title: "Developer",
        childrenconcepts: [
          { key: "quickstart", title: "Quickstart", link: "/quickstart" },
          { key: "styling", title: "Styling Components", link: "/styling" },
          {
            key: "positioning",
            title: "Positioning Components",
            link: "/positioning",
          },
          {
            key: "server-side-rendering",
            title: "Server-Side Rendering",
            childrenconcepts_developer: [
              { key: "basicsetup", title: "Basic setup", link: "/basicsetup" },
              {
                key: "limitations",
                title: "Limitations with Portals",
                link: "/limitations",
              },
              {
                key: "appdirsetup",
                title: "Next.js App Directory Setup",
                link: "/nest.js-appDir-setup",
              },
              {
                key: "pagesetup",
                title: "Next.js Pages Setup",
                link: "/nest.js-pages-setup",
              },
              {
                key: "react-router",
                title: "React Router Setup 7 and Remix setup",
                link: "/react-router",
              },
            ],
          },

          {
            key: "accessibility",
            title: "Accessibility",
            childrenconcepts_developer: [
              {
                key: "advanced-configuration",
                title: "Advanced Configuration",
                link: "/advanced-configuration",
              },
              {
                key: "advanced-styling-techniques",
                title: "Advanced Styling Techniques",
                link: "/advanced-styling-techniques",
              },
              {
                key: "browser-support-matrix",
                title: "Browser Support Matrix",
                link: "/browser-support-matrix",
              },
              {
                key: "build-time-styles",
                title: "Build time styles",
                link: "/build-time-styles",
              },
              {
                key: "customizing-with-slots",
                title: "Customizing Components with Slots",
                link: "/customizing-with-slots",
              },
              {
                key: "theming",
                title: "Theming",
                link: "/theming",
              },
            ],
          },
        ],
      },
      {
        key: "migration",
        title: "Migration",
        childrenconcepts: [
          {
            key: "getting-started",
            title: "Getting Started",
            link: "/getting-started",
          },
          {
            key: "keeping-design-consistent",
            title: "Keeping Design Consistent",
            link: "/keeping-design-consistent",
          },
          {
            key: "handling-breaking-changes",
            title: "Handling Breaking Changes",
            link: "/handling-breaking-changes",
          },
        ],
      },
      {
        key: "recipes",
        title: "Recipes",
        childrenconcepts: [
          {
            key: "media-objects",
            title: "Media Objects",
            link: "/media-objects",
          },
        ],
      },
    ],
  },
  {
    key: "theme",
    title: "Theme",
    children: [
      { key: "borderradi", title: "BorderRadi", link: "/borderradi" },
      { key: "colors", title: "Colors", link: "/colors" },
      { key: "fonts", title: "Fonts", link: "/fonts" },
      { key: "shadows", title: "Shadows", link: "/shadows" },
      { key: "stroke_widths", title: "Stroke Widths", link: "/stroke_widths" },
      { key: "typography", title: "Typography", link: "/typography" },
      {
        key: "badge",
        title: "Badge",
        childrencomponents: [
          {
            key: "badges",
            title: "Badge",
            link: "/badges",
          },
        ],
      },
    ],
  },
  {
    key: "components",
    title: "Components",
    children: [
      { key: "accordion", title: "Accordion", link: "/accordion" },
      { key: "avatar", title: "Avatar", link: "/avatar" },
      { key: "avatargroup", title: "AvatarGroup", link: "/avatargroup" },
    ],
  },
];

export default docItems;
