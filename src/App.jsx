import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// register both
gsap.registerPlugin(useGSAP, ScrollTrigger);
const App = () => {
  useGSAP(()=>{
        gsap.from("#skils", {
      scale:0,
      opacity: 0,
      duration:0.8,
      scrollTrigger: {
        trigger: "#skils img",   // element that triggers animation
        start: "top 100%",  // when top of box hits 80% of viewport
        end: "bottom 60%", // optional
        scrub: true,       // smooth scroll-linked animation
        markers: true      // shows markers for debugging
      }
    });
    
        gsap.from("#logo", {
          y:200,
      opacity: 0,
      duration:0.8,
      scrollTrigger: {
        trigger: "#logo h2",   // element that triggers animation
        start: "top 100%",  // when top of box hits 80% of viewport
        end: "bottom 60%", // optional
        markers: true   ,
      }
    });
         // Project 1: slide from left
  gsap.from("#project1", {
    x: -200,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#project1",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
      markers: true, // remove in production
    },
  });

  // Project 2: slide from right
  gsap.from("#project2", {
    x: 200,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#project2",
      start: "top 30%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
      markers: true,
    },
  });
    
  
    var tl=gsap.timeline()
    tl.from("#content h1",{
      y:-200,
      opacity:0,
      duration:1.45,
      delay:0.2,
      stagger:0.2
    })
    tl.from("#left-div #img",{
      opacity:0,
      duration:1.1,
      x:-700,
      rotate:360
    })
    gsap.from("#skils",{
      opacity:0,
      duration:1,
      scale:0
    })
  })
  
  return (
    <div id="body">
      <nav>
        <div id='content'>
          <h1>Portfolio</h1>
          <div id='info'>
            <h1><a href='#page4'>Projects</a></h1>
            <h1><a href='#page3'>Skills</a></h1>
            <h1><a href="#page2">About Me</a></h1>
            <h1><a href="#page5">Contact Me</a></h1>
             <h1 id="menu">☰</h1>
          </div>

        </div>
      </nav>
      <div id='page1'>
        <div id='left-div'>
          <div id='img'>
            <img src="" alt="" /> </div>

        <div id='profile'>
        <h1 id='name'>Piyush</h1>
        <h1 id='desig'>Software Developer</h1>
           </div>
        </div>
        <div id='right-div'>
          <div id='right-content'>
            <div id='rhead'>

            <h1>From Front To Back</h1>
            <h2>
  Passionate Software Developer specializing in the <span id='fonts'>MERN stack</span>, with strong expertise in <span id='fonts'> Java, C++, and C. </span>
  Actively seeking internship opportunities to apply skills in building high-quality, scalable applications.
</h2>
            </div>
          </div>

        </div>
      </div>
      <div id='page2'>
        <div id='left-div2'>
          <div id='about'>
            <h1>About Me</h1>
            <p>
  Hi, <span id='fonts'>I’m Piyush Saxena</span>, a passionate <span id="fonts">MERN Stack Developer</span> and Java enthusiast.  
  I love turning ideas into interactive, high-performance web applications with clean code and user-friendly design.  
  Skilled in <span id='fonts'>MongoDB, Express.js, React, Node.js, and Java</span>, I focus on building responsive frontends and scalable backends.  
  Always curious and eager to learn, I enjoy exploring new technologies and refining my craft to create projects that make an impact.  
</p>
            <a id="download">Get Resume</a>
          </div>
<div id='logo'>
  <h2><a href=""><i className="ri-linkedin-fill"></i></a></h2>
  <h2><a href=""><i className="ri-twitter-x-line"></i></a></h2>
  <h2><a href=""><i className="ri-github-fill"></i></a></h2>
  <h2><a href=""><i className="ri-linkedin-fill"></i></a></h2>
</div>

        </div>
        <div id='right-div2'>
   
<div id="profile">
  <img src="images/2.png" alt="" />
  <h1>Piyush Saxena</h1>
</div>
        </div>
        <div id='scroll'>
          
        </div>
      </div>
    
      <div id='page3'>
        <div id='left-div3'>
            <h1>Skills</h1>
          <div id='skils'>
            <div id='skill1'><img src="images/html.png" alt="HTML" /></div>
            <div id='skill2'><img src="images/css.png" alt="CSS" /></div>
            <div id='skill3'><img src="images/js.png" alt="JS" /></div>
            <div id='skill4'><img src="images/java.png" alt="JAVA" /></div>
            <div id='skill5'><img src="images/tail.png" alt="Tailwind" /></div>
            <div id='skill6'><img src="images/mongo.png" alt="MongoDb" /></div>
            <div id='skill7'><img src="images/express.png" alt="Express" /></div>
            <div id='skill8'><img src="images/react.png" alt="React" /></div>
            <div id='skill9'><img src="images/node.png" alt="Node" /></div>
            <div id='skill10'><img src="images/c++.png" alt="C++" /></div>
            <div id='skill11'><img src="images/boot.png" alt="Bootstrap" /></div>
          </div>

        </div>
        {/* <div id='right-div3'></div> */}
      </div>
      <div id='page4'>
        <div id="Projects">
          <h1>My Projects</h1>
          <div id='all'>

          <div id='project1'>
            <h1>Weatherify</h1>
            <div id='img-w'>
            <img src="images/we.png" alt="" />
            </div>
            <div id='desc'>
              <h2>Description</h2>
              <p>Weatherify – A weather app that provides real-time global forecasts using the OpenWeatherMap API, showing temperature, humidity, wind speed, and dynamic backgrounds based on conditions.</p>
              <h2>Features</h2>
              <div id='features'>
              <li>Real-time weather data using REST API integration</li>
              <li>Search by city name or geolocation</li>
              </div>
              <h2>Tech Stack:React, API Integration</h2>
            </div>
            <div id='btn-w'>

            <a href=''>Demo</a>
            <a href="">Github</a>
            </div>
            
          </div>
          <div id='project2'>
            <h1>CodeZone</h1>
            <div id='img-c'>

            <img src="images/code.png" alt="" />
            </div>
<div id='desc'>
              <h2>Description</h2>
                <p>CodeZone – An interactive MERN-based coding platform to practice, run, and share code in real time, with multi-language support and a modern, animated UI.</p>
              <h2>Features</h2>
              <div id='features'>
              <li>Real-time code compilation and output display</li>
              <li>Secure backend with Express and MongoDB</li>
              <li>User authentication & profile management</li>
              </div>
              <h2>Tech Stack: MERN, Tailwind CSS, GSAP
</h2>
            </div>
            <div id='btn-c'>
            <a>Demo</a>
            <a>Github</a>
            </div>
              
          </div>
          </div>
        </div>
      </div>
      <div id="page5">
        <h1>Contact Me</h1>
        <div id='Contact'>
          <div id='form'>
            <form action="">
              <input type="email" placeholder='Enter Your Email Here...'/>
              <textarea name="" id="" placeholder='Enter Your Message Here..'></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div id='socials'>
        <h1><i className="ri-github-fill"></i><a href="">Github</a></h1>
        <h1><i className="ri-twitter-x-line"></i><a href="">Twitter</a></h1>
          
        <h1><i className="ri-linkedin-fill"></i><a href="">LinkedIn</a></h1>
        </div>
      </footer>
      
    </div>
  )
}

export default App
