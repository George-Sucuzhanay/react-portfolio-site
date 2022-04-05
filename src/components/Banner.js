import waving from "../assets/waving.png"

const Banner = () => {
    return(
        <header>
                <div class="px-4 py-5 my-5 text-center">
                <img class="d-block mx-auto mb-4" src={waving} alt="" width="72"/>
                <h1 class="display-5 fw-bold">Not Your Average College Student</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-7">Get ready to turn your ideas into reality</p>
                <p class="lead mb-4">Hi, I’m George, a developer based in New York. Please take a look around!</p>
                <p class="lead mb-4">I am passionate about building excellent websites that improves the lives of those around me. I am also teaching myself React and C++ in order to build a web apps.</p>
                <p class="lead mb-4">I am currently participating in a Full-Stack Web Developemnt Bootcamp from The Knowledge House and teaching computer science classes online and in-person in NYC.</p>
                
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                </div>
                </div>
            </div>
            </header>
    )
}
export default Banner;