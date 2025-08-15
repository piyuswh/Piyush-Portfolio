import React from 'react'

const App = () => {
  return (
    <div id="body">
      <nav>
        <div id='content'>
          <h1>Portfolio</h1>
          <div id='info'>
            <h1><a href='#page4'>Projects</a></h1>
            <h1><a href='#page3'>Skills</a></h1>
            <h1><a href="#page2">About Me</a></h1>
            <h1><a href="">Contact Me</a></h1>
             <h1 id="menu">☰</h1>
          </div>

        </div>
      </nav>
      <div id='page1'>
        <div id='left-div'>
          <div id='img'>
            <img src="" alt="" /> </div>

        <div id='profile'>
        <h1 id='name'>XyZ</h1>
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
              Hi, <span id='fonts'>I’m Piyush Saxena</span>, a passionate <span id="fonts">MERN Stack Developer and Java</span> enthusiast who loves transforming ideas into interactive, high-performance web applications. I specialize in building complete solutions — from sleek, responsive frontends to scalable, secure backends.

With a strong command of <span id='fonts'>MongoDB, Express.js, React, Node.js, and Java</span>, I focus on writing clean, efficient code and crafting user-friendly experiences. I enjoy blending functionality with design to create websites that not only work flawlessly but also feel great to use.

When I’m not coding, you’ll find me exploring the latest tech trends, refining my projects, or challenging myself with programming problems. My goal is simple — to keep learning, keep building, and contribute to projects that make a real difference.
            </p>
            <a id="download">Get Resume</a>
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
              <p>Weatherify is a weather forecasting web application that provides real-time weather updates for any location worldwide. Powered by the OpenWeatherMap API, it displays detailed metrics such as temperature, humidity, wind speed, and weather conditions, with dynamic background changes based on the forecast.</p>
              <h2>Features</h2>
              <div id='features'>

              <li>Real-time weather data using REST API integration</li>
              <li>Search by city name or geolocation</li>
              <li>Temperature, humidity, wind speed, and condition display</li>
              <li>Dynamic UI changes based on weather conditions</li>
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
              <p>CodeZone is an interactive online coding platform built using the MERN stack, designed for developers to practice, run, and share code in real-time. It supports multiple programming languages and offers a user-friendly, modern interface with smooth animations.</p>
              <h2>Features</h2>
              <div id='features'>

              <li>Multi-language code editor with syntax highlighting</li>
              <li>Real-time code compilation and output display</li>
              <li>Secure backend with Express and MongoDB</li>
              <li>User authentication & profile management</li>
              </div>
              <h2>Tech Stack:
MongoDB, Express.js, React.js, Node.js, Tailwind CSS, GSAP Animations</h2>
            </div>
            <div id='btn-c'>
            <a>Demo</a>
            <a>Github</a>
            </div>
              
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
