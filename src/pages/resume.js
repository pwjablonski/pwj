import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./resume.module.css"

const Projects = ({data, location}) => {
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Resume" />
      <div className={style.content}>
         <section class={style.section}>
           <h1>Peter Jablonski</h1>
           <p>
              I am a computer science educator with 4 years
              of experience teaching web development fundamentals
              seeking a software engineering role. I am a major
              contributor to a complex, modern, open source,
              production level code base. I’m most effective
              breaking down complex technical problems, working
              collaboratively and developing approachable and
              accessible experiences for users.
            </p>
            <p> 
              Lately I’ve been working with 
              <span class={style.skill}> React,</span>
              <span class={style.skill}> Redux, </span>
              and
              <span class={style.skill}> Express</span>
            </p>
         </section>
         <section class={style.section}>
            <h2>Recent Highlights</h2>
            <div class="section__item">
              <div class={style.section__header}>
                <h3>Recurse Center</h3>
                <div class="section__dates">July 2019 - September 2019</div>
              </div>
              <h4 class={style.section__subheader}>
                Participant
              </h4>
              <ul class="section__details">
                <li>
                  Created <a href="https://word-up-prod.web.app">Word-Up</a> (<a href="https://github.com/pwjablonski/word-up">repo</a>), an approachable interface for constructing crossword puzzles
                </li>
                <li>
                  Created One-Across, a collaborative crossword solving platform <a href="https://joy.recurse.com/posts/337-one-across">featured</a> in RC’s Joy of Computing blog
                </li>
                <li>
                  Presented at Recurse’s monthly <a href="https://www.recurse.com/events/localhost-lightning-talks-august-2019">Localhost talk</a> to a technical audience of over 60 engineers
                </li>
              </ul>
            </div>
            <div class="section__item">
              <div class={style.section__header}>
                <h3>Popcode</h3>
                <div class="section__dates">January 2017 - Present</div>
              </div>
              <h4 class={style.section__subheader}>
                Contributor
              </h4>
              <ul class="section__details">
                <li>#3 contributor to <a href="https://popcode.org/">Popcode</a> (<a href="https://github.com/pwjablonski/popcode">repo</a>), an open source programming environment designed to support new learners and classroom workflows used by over 1000 students daily</li>
                <li>Implemented Google authentication greatly reducing student sign up time (<a href="https://github.com/popcodeorg/popcode/pull/1450">#1450</a>)</li>
                <li>Integrated with Google Classroom streamlining the processes for assignment submission (<a href="https://github.com/popcodeorg/popcode/pull/1511">#1511</a>)</li>
                <li>BuiltEnabled archive projects feature (<a href="https://github.com/popcodeorg/popcode/pull/1485">#1485</a>) and redesigned the project selection interface (<a href="https://github.com/popcodeorg/popcode/pull/1737">#1737</a>) simplifying the navigation and selection of projects</li>
                <li>Created initial version of DOM element highlighter visually connecting cursor position to highlighted elements (<a href="https://github.com/popcodeorg/popcode/pull/1025">#1025</a>)</li>
              </ul>
            </div>
         </section>
         <section class={style.section}>
            <h2>Work Experience</h2>
            <div class="section__item">
              <div class={style.section__header}>
                <h3>Code Nation (formerly ScriptEd)</h3>
                <div class="section__dates">January 2017 - June 2019</div>
              </div>
              <h4 class={style.section__subheader}>
                Senior Program Manager,  Curriculum Specialist
              </h4>
            </div>
            <div class="section__item">
              <div class={style.section__header}>
                <h3>Code / Interactive</h3>
                <div class="section__dates">October 2015 - January 2017</div>
              </div>
              <h4 class={style.section__subheader}>
                Program Manager
              </h4>
            </div>
            <div class="section__item">
              <div class={style.section__header}>
                <h3>Flatiron School</h3>
                <div class="section__dates">May 2015 - August 2015</div>
              </div>
              <h4 class={style.section__subheader}>
                Pre-College Fellow
              </h4>
            </div>
            <div class="section__item">
              <div class={style.section__header}>
                <h3>St. Louis Public Schools, Dewey ISS</h3>
                <div class="section__dates">May 2013 - May 2015</div>
              </div>
              <h4 class={style.section__subheader}>
                Chinese Language Teacher, Teach for America Corps Member
              </h4>
            </div>
         </section>
         <section class={style.section}>
            <h2>Education</h2>
            <div class="section__item">
              <div class={style.section__header}>
                <h3>Washington University in St. Louis</h3>
                <div class="section__dates">August 2009 - May 2013</div>
              </div>
              <h4 class={style.section__subheader}>
                Bachelor of Arts, Majors in Chinese and International Business
              </h4>
            </div>
            <div class="section__item">
              <div class={style.section__header}>
                <h3>Fudan University</h3>
                <div class="section__dates">May 2011 - December 2011</div>
              </div>
            </div>
         </section>
      </div>
    </Layout>
  )
}

export default Projects