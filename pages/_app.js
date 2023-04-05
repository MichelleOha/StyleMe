import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/layout.css";
import "remixicon/fonts/remixicon.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="bg-gray-500">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
