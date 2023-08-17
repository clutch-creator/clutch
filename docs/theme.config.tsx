import { useRouter } from "next/router";
import { HeaderLogo } from "./components/HeaderLogo";

export default {
  logo: <HeaderLogo />,
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
        <a
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "flex-start",
            width: "100%",
          }}
          className="flex items-center gap-1 text-current"
          target="_blank"
          rel="noopener noreferrer"
          title="vercel.com homepage"
          href="https://app.clutch.io/"
        >
          <span>Powered by</span>
          <div>
            <HeaderLogo />
          </div>
        </a>
        <p className="mt-6 text-xs">© {new Date().getFullYear()}</p>
      </div>
    ),
  },
};
