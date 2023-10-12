import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../../public/fonts/ClashDisplay-Bold.otf',
  variable: '--font-clash'
});

export default function Layout({children}) {
    return(
    <>
        <Head>
            <title>IEI CSE TKMCE</title>
        </Head>
        <div className={`${myFont.variable} flex flex-col min-h-screen`}>
            <Navbar/>
            <main className="flex-auto bg-hero-bg">{children}</main>
            <Footer/>
        </div>
    </>
    );
};