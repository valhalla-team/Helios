export interface Component {
  title: string;
  href: string;
  description: string;
}

export interface Item {
  href: string;
  title: string;
  description: string;
}

export interface Featured {
  href: string;
  title: string;
  description: string;
}

export const components: Component[] = [
  {
    title: "GraphQL API Proxy",
    href: "/components/graphql-proxy",
    description:
      "Handles communication with the ASP.NET backend, providing a secure proxy endpoint for GraphQL queries.",
  },
  {
    title: "Apollo Client Setup",
    href: "/components/apollo-client",
    description:
      "Configures Apollo Client with InMemoryCache for efficient data management and to avoid repeated calls.",
  },
  {
    title: "User Data Hook",
    href: "/hooks/useFetchUserData",
    description:
      "Custom hook for fetching user data from the GraphQL API, integrating Apollo Client for data management.",
  },
  {
    title: "Modular UI Components",
    href: "/components/ui",
    description:
      "A collection of reusable components designed using atomic design principles to create a flexible UI.",
  },
  {
    title: "Deployment with Railway",
    href: "/deployment/railway",
    description:
      "Details on how to deploy the Next.js application using Railway, including Docker support.",
  },
  {
    title: "State Management with Zustand/Redux",
    href: "/state-management/zustand-redux",
    description:
      "Plans for implementing global state management using Zustand or Redux for better application state control.",
  },
  {
    title: "Loading States",
    href: "/components/loading-state",
    description:
      "Components that manage loading states to improve user experience during data fetching.",
  },
  {
    title: "Responsive Navigation Bar",
    href: "/components/navigation-bar",
    description:
      "A responsive navigation bar that adapts seamlessly to different screen sizes, enhancing usability.",
  },
];

export const items: Item[] = [
  { href: '/about', title: 'About Me', description: 'Learn more about my background and skills in web development.' },
  { href: '/projects', title: 'Projects', description: 'Explore the various projects I have developed.' },
  { href: '/blog', title: 'Blog', description: 'Read my insights and experiences in my blog.' },
];

export const featured: Featured = {
  href: '/portfolio',
  title: 'My Portfolio',
  description: 'A showcase of my web development work utilizing Next.js, Tailwind CSS, and ASP.NET backend.',
};
