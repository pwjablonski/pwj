import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./resume.module.css"

const Projects = ({data, location}) => {
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Resume" />
      <div className={style.content}>
        <h1>Peter Jablonski</h1>
         <section className={style.section}>
           <p>
              I am a computer science educator with 4 years
              of experience teaching web development fundamentals,
              seeking a software engineering role. Outside of work,
              I am a major contributor to a complex, modern, production
              level, open source code base. I’m most effective breaking
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
            <p><span className={style.skill}>Strong</span>​: ​JavaScript (ES5/ES6), React, Redux, Gatsby.js, HTML, CSS, Git, Firebase, Flux Architecture, JAMstack, jQuery</p>
            <p><span className={style.skill}>Experienced</span>: ​ Webpack, RESTful APIs, Node/Express, MongoDB/Mongoose, Travis CI, Testing (Jest), GraphQL, Svelte</p>
            <h2>Recent Highlights</h2>
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
                <h3>Recurse Center</h3>
                <div className="section__dates">July 2019 - September 2019</div>
              </div>
              <h4 className={style.section__subheader}>
                Participant
              </h4>
              <ul className="section__details">
                <li>
                  Created <a className={style.link} href="https://word-up-prod.web.app">Word-Up</a> (<a className={style.link} href="https://github.com/pwjablonski/word-up">repo</a>), an approachable interface for constructing crossword puzzles
                </li>
                <li>
                  Created One-Across, a collaborative crossword solving platform <a className={style.link} href="https://joy.recurse.com/posts/337-one-across">featured</a> in RC’s Joy of Computing blog
                </li>
                <li>
                  Presented at Recurse’s monthly <a className={style.link} href="https://www.recurse.com/events/localhost-lightning-talks-august-2019">Localhost talk</a> to a technical audience of over 60 engineers
                </li>
                <li>
                  Created implementation of <a className={style.link} href="https://ulitmate-tic-tac-toe.pwjablonski.now.sh/">Ultimate TicTacToe</a> (<a className={style.link} href="https://github.com/pwjablonski/ultimate-tic-tac-toe">repo</a>) using Svelte framework
                </li>
                <li>
                  Explored <a className={style.link} href="https://pwjablonski.com/projects/lines">p5.js</a>, <a className={style.link} href="https://pwjablonski.com/projects/ratios">HTML Canvas</a> and <a className={style.link} href="https://pwjablonski.com/projects/recurse-logo">CSS animations</a> to create generative art
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
                <p className={style.section__endorsement}>As one of Popcode’s most consistent and productive contributors for the past two and a half years, Peter has demonstrated an ability to independently tackle technically challenging work that I would only expect from someone with several years of professional experience. His ability to write high-quality code that solves complex problems, working within a large and mature codebase, will make him a valued member of the software team that is lucky enough to hire him. I can’t recommend working with Peter highly enough! —Mat Brown</p>
              </ul>
            </div>
         </section>
         <section className={style.section}>
            <h2>Work Experience</h2>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Code Nation (formerly ScriptEd)</h3>
                <div className="section__dates">January 2017 - June 2019</div>
              </div>
              <h4 className={style.section__subheader}>
                Senior Program Manager,  Curriculum Specialist
              </h4>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Code / Interactive</h3>
                <div className="section__dates">October 2015 - January 2017</div>
              </div>
              <h4 className={style.section__subheader}>
                Program Manager
              </h4>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Flatiron School</h3>
                <div className="section__dates">May 2015 - August 2015</div>
              </div>
              <h4 className={style.section__subheader}>
                Pre-College Fellow
              </h4>
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
            <h2>Education</h2>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Washington University in St. Louis</h3>
                <div className="section__dates">August 2009 - May 2013</div>
              </div>
              <h4 className={style.section__subheader}>
                Bachelor of Arts, Majors in Chinese and International Business
              </h4>
            </div>
            <div className={style.section__item}>
              <div className={style.section__header}>
                <h3>Fudan University</h3>
                <div className="section__dates">May 2011 - December 2011</div>
              </div>
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
            </div>
         </section>
      </div>
    </Layout>
  )
}

export default Projects