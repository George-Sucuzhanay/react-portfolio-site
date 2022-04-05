import codecademy from '../assets/codecademy.png'
import codingspace from '../assets/codingspace.png'
import stemalliance from '../assets/stemalliance.png'
import barclays from '../assets/barclays.png'

const WorkExperience = () => {
    return(
        <div className='row work'>
            <h1>Work Experience
            </h1>
            <div className='col-md-3'>
                <img src={stemalliance} alt="" />
                <h1>Teaching and Tech Assistant</h1>
            </div>
            <div className='col-md-3'>
                <img src={codecademy} alt=""/>
                <h1>Curriculum Developer Intern</h1>
            </div>
            <div className='col-md-3'>
                <img src={codingspace} alt=""/>
                <h1>Computer Science Teacher</h1>
            </div>
            <div className='col-md-3'>
                <img src={barclays} alt=""/>
                <h1>Software Intern</h1>
            </div>
            <div className='col-md-3'>

            </div>



        </div>
    )
}
export default WorkExperience;