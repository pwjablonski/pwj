import React from "react"

import Seo from "../components/seo"
import * as style from "./resume.module.css"

const Projects = ({data, location}) => {
  return (
    <>
      <Seo title="Resume" />
      <div className={style.content}>
        <h1>Peter Jablonski</h1>
         <section className={style.section}>
           <p>
              I am a former educator turned software engineer
              seeking a new challenge. I’m most effective breaking
              down complex technical problems, working collaboratively
              and developing approachable and accessible experiences for users.
            </p>
            <p> 
              Lately I’ve been working with 
              <span className={style.skill}> React,</span>
              <span className={style.skill}> Redux, </span>
              and
              <span className={style.skill}> Express</span>
            </p>
         </section>
         <section className={style.section}>
            <h2>Technical Skills</h2>
            <p><span className={style.skill}>Strong</span>​: JavaScript (ES5/ES6), React, Redux, Gatsby.js, HTML, CSS, Git, Firebase, Flux Architecture, JAMstack, jQuery</p>
            <p><span className={style.skill}>Experienced</span>: ​ Webpack, RESTful APIs, D3.js, Node/Express, Postgres/Sequelize,  Travis CI, Testing (Jest),  GraphQL</p>
            <h2>Recent Highlights</h2>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>DOTDASH MEREDITH</h3>
                <div className="section__dates">October 2020 - Present</div>
              </div>
              <h4 className={style.section__subheader}>
                ​Senior Software Engineer
              </h4>
              <h4 className={style.section__subheader}>
                Software Engineer II
              </h4>
              <h4 className={style.section__subheader}>
                Frontend Developer
              </h4>
              <ul className="section__details">
                <li>
                  Planning, designing and creating standardized application components used network wide across over 20 sites
                </li>
                <li>
                  Utilizing Lighthouse to optimize Core Web Vitals creating more performant sites for millions of daily vistors
                </li>
                <li>
                  Actively monitoring data from RUM metrics and Kibanna errors to improve overall application health 
                </li>
                <li>
                  Establishing and maintaining proctor A/B testing to measure efficacy of new product intiatives
                </li>
              </ul>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>ASIA SOCIETY</h3>
                <div className="section__dates">March 2019 - Present</div>
              </div>
              <h4 className={style.section__subheader}>
                ​Software Engineer (Contract)
              </h4>
              <ul className="section__details">
                <li>
                  Building and deploying a full stack JavaScript application for an interactive digital art exhibition
                </li>
                <li>
                  Integrating D3.js and Leaflet libraries to create interactive and scalable location based images
                </li>
              </ul>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>UPPERLINE CODE</h3>
                <div className="section__dates">November 2019 - March 2020</div>
              </div>
              <h4 className={style.section__subheader}>
                ​Software Engineer (Contract)
              </h4>
              <ul className="section__details">
                <li>
                  Built and deployed JAMstack application (Gatsby.js, Airtable, Firebase, Cloud Functions) to create teacher training platform
                </li>
                <li>
                  Utilized GraphQL page queries to dynamically generate create page content from Airtable and Github                </li>
                <li>
                  Configured Redux for state management, with immer as immutable data store and redux-thunk for async data processing in
order to standardize data flow and management                
                </li>
                <li>
                  Implemented private client side routing using React reach router to protect privileged content                </li>
                <li>
                  Deployed Firebase cloud functions to consume firebase events and trigger data forwarding via Airtable API
                </li>
              </ul>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Code Nation (formerly ScriptEd)</h3>
                <div className="section__dates">January 2017 - June 2019</div>
              </div>
              <h4 className={style.section__subheader}>
                Senior Program Manager,  Curriculum Specialist
              </h4>
              <ul className="section__details">
                <li>
                   Led revision of three levels of web development curricula for over 1000 students covering HTML, CSS, ​JavaScript, React
                </li>
                <li>
                  Collaborated with developer team on research, planning and  development of CN Lesson Planning tool (repo)
                </li>
              </ul>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Code / Interactive</h3>
                <div className="section__dates">October 2015 - January 2017</div>
              </div>
              <h4 className={style.section__subheader}>
                Program Manager
              </h4>
              <ul className="section__details">
                <li>
                  Managed and supported 6 partner schools to implement Creative Web Development and Programming course
                </li>
              </ul>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Flatiron School</h3>
                <div className="section__dates">May 2015 - August 2015</div>
              </div>
              <h4 className={style.section__subheader}>
                Pre-College Fellow
              </h4>
              <ul className="section__details">
                <li>
                  Led  Intro to Software Engineering course covering Ruby, Javascript, HTML, CSS, Sinatra, SQL, Design Thinking
                </li>
              </ul>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>St. Louis Public Schools, Dewey ISS</h3>
                <div className="section__dates">May 2013 - May 2015</div>
              </div>
              <h4 className={style.section__subheader}>
                Chinese Language Teacher, Teach for America Corps Member
              </h4>
            </div>
         </section>
         <section className={style.section}>
            <h2>RELEVANT EXPERIENCE</h2>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>STANFORD UNIVERSITY</h3>
                <div className="section__dates">June 2020 - August  2020</div>
              </div>
              <h4 className={style.section__subheader}>
                CS106A Section Leader 
              </h4>
              <ul className="section__details">
                <li>
                  Led and mentored a group of 12 students from across the globe through a 5 week remote intensive Intro to CS course
                </li>
              </ul>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Recurse Center</h3>
                <div className="section__dates">July 2019 - September 2019</div>
              </div>
              <h4 className={style.section__subheader}>
                Participant
              </h4>
              <ul className="section__details">
                <li>
                  Created <a className={style.link} href="https://word-up-prod.web.app">Word-Up</a>, an approachable interface for constructing crossword puzzles as well as <a className={style.link} href="https://one-across.web.app/">One Across</a>, a collaborative crossword solving platform <a className={style.link} href="https://joy.recurse.com/posts/337-one-across">featured</a> in RC’s Joy of Computing blog. Used Flux architecture with React, Redux, redux-logic for async processing, and immer for immutable data store to create modularized application with optimized data flow. Automated continuous deployment with Travis CI and Jest ensuring simplifying deployment and ensuring product quality
                </li>
                <li>
                  Presented at Recurse’s monthly <a className={style.link} href="https://www.recurse.com/events/localhost-lightning-talks-august-2019">Localhost talk</a> to a technical audience of over 60 engineers
                </li>
              </ul>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Popcode</h3>
                <div className="section__dates">January 2017 - Present</div>
              </div>
              <h4 className={style.section__subheader}>
                Contributor
              </h4>
              <ul className="section__details">
                <li>#3 contributor to <a className={style.link} href="https://popcode.org/">Popcode</a> (<a className={style.link} href="https://github.com/popcodeorg/popcode">repo</a>), an open source programming environment designed to support new learners and classroom workflows used by over 1000 students daily</li>
                <li>Implemented Google authentication, greatly reducing student sign up time (<a className={style.link} href="https://github.com/popcodeorg/popcode/pull/1450">#1450</a>)</li>
                <li>Integrated with Google Classroom, streamlining the processes for assignment submission (<a className={style.link} href="https://github.com/popcodeorg/popcode/pull/1511">#1511</a>)</li>
                <li>BuiltEnabled archive projects feature (<a className={style.link} href="https://github.com/popcodeorg/popcode/pull/1485">#1485</a>) and redesigned the project selection interface (<a className={style.link} href="https://github.com/popcodeorg/popcode/pull/1737">#1737</a>), simplifying the navigation and selection of projects</li>
                <li>Created working proof-of-concept of DOM element highlighter, visually connecting cursor position to highlighted elements (<a className={style.link} href="https://github.com/popcodeorg/popcode/pull/1025">#1025</a>)</li>
              </ul>
            </div>
         </section>
         <section className={style.section}>
            <h2>Education</h2>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Washington University in St. Louis</h3>
                <div className="section__dates">August 2009 - May 2013</div>
              </div>
              <h4 className={style.section__subheader}>
                Bachelor of Arts, Majors in Chinese and International Business
              </h4>
              <h4 className="section__details">
                 Relevant Coursework: Computer Science I, Calculus II, Physics and Society
              </h4>
            </div>
         </section>
         <section className={style.section_last}>
            <h2>References</h2>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Mat Brown</h3>
                <div className="section__dates">mat.a.brown@gmail.com</div>
              </div>
              <h4 className={style.section__subheader}>
                Senior Software Engineer at Dropbox / maintainer of Popcode
              </h4>
              <p className={style.section__endorsement}>As one of Popcode’s most consistent and productive contributors for the past two and a half years, Peter has demonstrated an ability to independently tackle technically challenging work that I would only expect from someone with several years of professional experience. His ability to write high-quality code that solves complex problems, working within a large and mature codebase, will make him a valued member of the software team that is lucky enough to hire him. I can’t recommend working with Peter highly enough! —Mat Brown</p>
            </div>
         </section>
      </div>
    </>
  )
}

export default Projects