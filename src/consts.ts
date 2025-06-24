import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "FelipebDev",
  DESCRIPTION: "Felipe borgaco dev blog.",
  EMAIL: "felipeborgaco@hotmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Felipe borgaco dev blog.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/felipebrgs1",
    ICON:  "/github.svg"
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/felipeborgaco/",
    ICON: "/linkedin.svg"
  },
];
