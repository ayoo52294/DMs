import './Hero2.css'
import header from './header.jpg'
function Hero2() 
{
    return(
       <>
         {/* <!-- Hero2  --> */}
         <head>
         <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

         </head>
            <section class="hero2" id="hero2">
                <div class="hero2-img">
                        <img src={header} alt="Hero2-img"/>
                    <div class="hero-overlay"></div>
                </div>
                    <h2>Lorem, ipsum.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vero voluptatibus facilis ipsam perspiciatis ab minima distinctio quam soluta quidem, veniam labore magni consectetur aspernatur error officia, nostrum voluptas consequatur!
                    </p>
                    <a className="btn"  id='btn2' href="#contact">Patronize Us</a>
            </section>      
       
       </>
    ); 
}

export default Hero2