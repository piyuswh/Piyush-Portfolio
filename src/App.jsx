import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// register both
gsap.registerPlugin(useGSAP, ScrollTrigger);
const App = () => {
  useGSAP(()=>{
        gsap.from("#skils img", {
  y: 50,           
  opacity: 0,       
  duration: 1,      
  ease: "power2.out",
  stagger: 0.2,     
  scrollTrigger: {
    trigger: "#skils img",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none reverse", 
  }
});
    
        gsap.from("#logo", {
          y:80,
      opacity: 0,
      duration:0.8,
      scrollTrigger: {
        trigger: "#logo h2",   
        start: "top 100%",  
        end: "bottom 60%", 
      }
    });
 
gsap.fromTo(
  "#project1",
  { y: 80, opacity: 0 },
  {
    y: 0,
    opacity: 1.5,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#project1",
      start: "top 85%",
      end: "bottom 70%",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  }
);

gsap.fromTo(
  "#project2",
  { y:80, opacity: 0 },
  {
    y: 0,
    opacity: 1.5,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#project2",
      start: "top 85%",
      end: "bottom 70%",
      toggleActions: "play none none reverse",
    },
  }
);

    
  
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
          <h1 id="main">Portfolio</h1>
          <div id='info'>
            <h1><a href='#page4'>Projects</a></h1>
            <h1><a href='#page3'>Skills</a></h1>
            <h1><a href="#page2">About Me</a></h1>
            <h1><a href="#page5">Contact Me</a></h1>
             <div id="menu"><h1>☰</h1></div>
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
            <a id="download" href='images/piyush.pdf' download={"Piyush_resume.pdf"}>Get Resume</a>
          </div>
<div id='logo'>
  <h2><a href="https://www.linkedin.com/in/piyush-saxena-86a7322ab/"><i className="ri-linkedin-fill"></i></a></h2>
  <h2><a href="https://x.com/"><i className="ri-twitter-x-line"></i></a></h2>
  <h2><a href="https://github.com/piyuswh"><i className="ri-github-fill"></i></a></h2>
</div>

        </div>
        <div id='right-div2'>
   
<div id="profile">
  <img src="images/2.png" alt="" />
</div>
        </div>
          
      </div>
    
      <div id='page3'>
        <div id='left-div3'>
            <h1 style={{color:"white"}}>Skills</h1>
          <div id='skils'>
            <div id='skill2'><img src="images/css.png"  /></div>
            <div id='skill3'><img src="images/js.png"  /></div>
            <div id='skill1'><img src="images/html.png" /> </div>
            <div id='skill4'><img src="images/java.png"  /></div>
            <div id='skill5'><img src="images/tail.png" /></div>
            <div id='skill6'><img src="images/mongo.png"  /></div>
            <div id='skill7'><img src="images/express.png"  /></div>
            <div id='skill8'><img src="images/react.png"  /></div>
            <div id='skill9'><img src="images/node.png"  /></div>
            <div id='skill10'><img src="images/c++.png"  /></div>
          </div>

        </div>
        {/* <div id='right-div3'></div> */}
      </div>
      <div id='page4'>
        <div id="Projects">
          <h1>Projects</h1>
          <div id='all'>

          <div id='project1'>
            <h1>Weatherify</h1>
            <div id='img-w'>
            <img src="images/we.png" alt="" />
            </div>
            <div id='desc'>
              <h2 id='d'>Description</h2>
              <p>Weatherify – A weather app that provides real-time global forecasts using the OpenWeatherMap API, showing temperature, humidity, wind speed, and dynamic backgrounds based on conditions.</p>
              
              <h2>Tech Stack:React, API Integration</h2>
            </div>
            <div id='btn-w'>

            <a href='https://piyuswh.github.io/Weatherify/'>Demo</a>
            <a href="https://github.com/piyuswh/Weatherify">Github</a>
            </div>
            
          </div>
          <div id='project2'>
            <h1>CodeZone</h1>
            <div id='img-c'>

            <img src="images/code.png" alt="" />
            </div>
<div id='desc'>
              <h2 id="d">Description</h2>
                <p>CodeZone – An interactive MERN-based coding platform to practice, run, and share code in real time, with multi-language support and a modern, animated UI.</p>
            
              <h2>Tech Stack: MERN, Tailwind CSS, GSAP
</h2>
            </div>
            <div id='btn-c'>
            <a href='https://codezone-1-f38m.onrender.com/'>Demo</a>
            <a href='https://github.com/piyuswh/CodeZone'>Github</a>
            </div>
              
          </div>
          </div>
        </div>
      </div>
      <div id="page5">
        <div id='scroll'> 
          <div id='scroll-details'>
            <h1>MERN</h1>
            <h1>JAVA</h1>
            <h1>C++</h1>
          </div>
        </div>
        <h1 id='c'>Contact Me</h1>
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
        <h1><i className="ri-github-fill"></i><a href="https://github.com/piyuswh">Github</a></h1>
        <h1><i className="ri-twitter-x-line"></i><a href="https://x.com/">Twitter</a></h1>
          
        <h1><i className="ri-linkedin-fill"></i><a href="https">LinkedIn</a></h1>
        </div>
      </footer>
      
    </div>
  )
}

export default App
