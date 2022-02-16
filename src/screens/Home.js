import Header from "../components/Header";
import Interests from "../components/Interests";
import TechnicalSkills from "../components/TechnicalSkills";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const  Home = () => {
    return(
        <div>
            <Header/>
            <TechnicalSkills/>
            <WorkExperience/>
            <Interests/>
            <Projects/>
            <Footer/>
        </div>
    )
}
export default Home;