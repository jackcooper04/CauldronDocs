import { useRouter } from 'next/router'

export default {
  logo: <span>Cauldron Documentation</span>,
  project: {
    link: "https://github.com/jackcooper04/CauldronEngine",
  },
  title: "test",
  useNextSeoProps() {
    const {asPath} = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – SWR",
      };
    }
  }
  // ... other theme options
};
