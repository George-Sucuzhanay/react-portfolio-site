const  Footer = () => {
    return(
            <footer class="text-center text-lg-start bg-light text-muted">

            <section
                class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
            
                <div class="me-5 d-none d-lg-block">
                <span>Get connected with me on social media:</span>
                </div>

                <div>
                <a href="https://www.linkedin.com/in/georgesucuzhanay/" class="me-4 text-reset">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/George-Sucuzhanay" class="me-4 text-reset">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://medium.com/@george_sucuzhanay/" class="me-4 text-reset">
                    <i class="fa fa-medium"></i>
                </a>
                <a href="https://www.instagram.com/cs_george.py/" class="me-4 text-reset">
                    <i class="fab fa-instagram"></i>
                </a>
                </div>
            
            </section>

            

            <div class="text-center p-4" style={{backgroundColor: "black"}}>
                © 2022 Copyright: 
                <a class="text-reset fw-bold" href="https://github.com/George-Sucuzhanay/react-portfolio-site/">George Sucuzhanay</a>
            </div>

            </footer>

    )
}
export default Footer;