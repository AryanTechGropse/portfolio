import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ReactQueryProvider from "../Providers/QueryProvider";

export default function WebLayout({ children }) {
    return (
        <>
            <ReactQueryProvider>
                <Header />
                {children}
                <Footer />
            </ReactQueryProvider>
        </>
    );
}
