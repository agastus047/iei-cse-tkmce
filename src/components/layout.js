import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../../public/fonts/ClashDisplay-Bold.otf',
  variable: '--font-clash'
});
const myFont2 = localFont({
    src:'../../public/fonts/OldeEnglish.ttf',
    variable: '--font-olde'
})

export default function Layout({children}) {
    return(
    <>
        <Head>
            <title>IEI CSE TKMCE</title>
        </Head>
        <div className={`${myFont2.variable} ${myFont.variable} flex flex-col bg-hero-bg min-h-screen`}>
            <Navbar/>
            <main className="flex-auto bg-hero-bg">{children}</main>
            <Footer/>
        </div>
    </>
    );
};