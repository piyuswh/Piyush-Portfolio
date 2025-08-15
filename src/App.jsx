import React from 'react'

const App = () => {
  return (
    <div id="body">
      <nav>
        <div id='content'>
          <h1>Portfolio</h1>
          <div id='info'>
            <a>Projects</a>
            <a href='#page2'>About Me</a>
            <a>Contact Me</a>
            <a>Socials</a>
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
            <button id="download">Get Resume</button>
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

        </div>
        <div id='right-div3'></div>
      </div>
      <footer>
        <div id='foot'>
          <h1>Github</h1>
          <h1>LinkedIn</h1>
         <h1>
          Instagram
          </h1> 
           </div>
      </footer>
    </div>
  )
}

export default App
