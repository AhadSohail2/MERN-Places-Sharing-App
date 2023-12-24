import { Fragment } from "react/cjs/react.production.min";
import TopProducts from "../components/Body/Products/TopProducts";
import Search from "../components/Body/Search";
import Slider from "../components/Body/Slider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const Home = () => {


    return (
        <Fragment>
            <Header />
            <Search />
            <Slider />
            <TopProducts />
            <Footer />
        </Fragment>
    )
}

export default Home;