import webdev from '../assets/webdev.png'
import csed from '../assets/csed.png'
import mentor from '../assets/mentor.png'
import finance from '../assets/finance.png'
const Interests = () => {
    return(
        <div className="container">
            <h1>Interests</h1>
            <div className="row">
                <div className="col-md-3">
                    <img src={webdev} alt=""/>
                    <h1>Web App Developement</h1>
                    <p>Enjoy creating web applications and contributing in solving real-world problems is a passion I have to heart. I enjoy creating websites since I can build it from the ground up and learn even more web development skills.</p>
                </div>
                <div className="col-md-3">
                    <img src={csed} alt=""/>
                    <h1>Computer Science Education</h1>
                    <p>After mentoring students to code over the summer, I learned a new interest in teaching Computer Science. I look forward in obtaining my master's degree in Computer Science Education at Hunter College after I graduate.</p>
                </div>
                <div className="col-md-3">
                    <img src={mentor} alt=""/>
                    <h1>Youth Mentorship</h1>
                    <p>Mentoring students, sharing college admissions advice and career programs as allowed me to learn more about my interest in being a mentor to students getting started in their tech journey.</p>
                </div>
                <div className="col-md-3">
                    <img src={finance} alt=""/>
                    <h1>Financial Literacy</h1>
                    <p>The lack of Financial Literacy in underserved communities has inspired me to teach others the important and life-changing skills to teens.</p>
                </div>
            </div>
            
            
        </div>
    )
}
export default Interests;