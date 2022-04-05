import Header from "../components/Header";
import Interests from "../components/Interests";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const  Home = () => {
    return(
        <div>
            <Header/>
            <Banner/>
            <WorkExperience/>
            <Interests/>
            <Footer/>
        </div>
    )
}
export default Home;