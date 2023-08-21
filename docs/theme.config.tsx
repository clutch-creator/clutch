import { useRouter } from "next/router";
import { HeaderLogo } from "./components/headerLogo/HeaderLogo";
import { FooterLogo } from "./components/footerLogo/FooterLogo";
import { LogoDivider } from "./components/logoDivider/LogoDivider";
import { DocsWordMark } from "./components/docsWordMark/DocsWordMark";

export default {
  logo: <><HeaderLogo/><LogoDivider/><DocsWordMark/></>,
  logoLink: false,
  docsRepositoryBase: "https://github.com/clutch-creator/clutch/tree/main/docs",
  project: {
    link: "https://github.com/clutch-creator/clutch/tree/main/docs",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();

    console.log(asPath);

    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Clutch",
      };
    }
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  head: function useHead() {
    return (
      <>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    );
  },
  primaryHue: 151,
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    themes: ['dark'],
  },
  footer: {
    text: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flex: 1,
        }}
      >
          <span>Powered by</span>          
            <FooterLogo />
        <p className="mt-6 text-xs">© {new Date().getFullYear()}</p>
      </div>
    ),
  },
};
