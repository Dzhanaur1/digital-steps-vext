import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Home from "./page";
import Header from "./(components)/Header";

import "./style.min.css";
import Footer from "./(components)/Footer";
import Script from "next/script";
import { PopupProvider } from "./(context)/PopupProvider";
import Popup from "./(components)/Popup";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Steps || Курсы IT для детей",
  description: "Онлайн курсы по компьютерной грамотности и веб-дизайну.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://digitalsteps.tech",
    siteName: "Digital Steps",
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        name: "Главная",
        url: "https://digitalsteps.tech/",
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        name: "Курсы",
        url: "https://digitalsteps.tech/courses",
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        name: "Контакты",
        url: "https://digitalsteps.tech/contact",
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        name: "Разработка сайтов",
        url: "https://digitalsteps.tech/courses/site-develop",
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        name: "Веб-дизайн",
        url: "https://digitalsteps.tech/courses/web-design",
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        name: "Компьютерная грамотность",
        url: "https://digitalsteps.tech/courses/komputernaya-gramotnost",
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        name: "Основы алгоритмизации",
        url: "https://digitalsteps.tech/courses/osnovy-algoritmizatsii",
      },
    ]),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="rus">
      <head>
        {/* <link rel="stylesheet" href="assets/all-icons/myicon.css" /> */}

        {/* <link rel="stylesheet" href="assets/css/bootstrap.min.css" /> */}

        {/* <link rel="stylesheet" href="assets/css/plugins.css" /> */}

        {/* <link rel="stylesheet" href="assets/css/style.min.css" /> */}

        {/* <link rel="stylesheet" href="assets/css/responsive.min.css" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SpeedInsights />
        <Script
          id="yandex-metrica"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){
              (m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(97931300, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
            `,
          }}
        />
        <Script
          src="https://kit.fontawesome.com/0abf972db9.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
        <Script src="/assets/js/index.min.js" strategy="lazyOnload" />
        {/* <div className="preloder v1"></div> */}

        <div id="root">
          <PopupProvider>
            <Header />
            {children}
            <Popup />
          </PopupProvider>

          <Footer />
        </div>
      </body>
      {/* <body classNameName={inter.classNameName}>{children}</body> */}
    </html>
  );
}
