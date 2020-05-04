import React from 'react'
import '../styles/stepper.css'
import work from '../data/Work'
import grad from '../data/Edu'
import cert from '../data/Cert'
import lang from '../data/Language'
import hobby from '../data/Interests'
import { ExperienceWrapper, WorkWrapper, EdWrapper, EdContent, Stepper, StepperHead, LogoLink, StepperDesc } from '../styles/workStyle.js'
import Layout from '../components/layout'

const Experience = () => (
  <Layout>
  <ExperienceWrapper>
    <WorkWrapper>
      <h1>Work Experience</h1>
      <div className="experience-stepper">
          {
            work.map(item => (<div key={item.id} className="step">
              <div>
                <div className="circle"></div>
                <div className="line"></div>
              </div>
              <Stepper>
                <StepperHead>
                  <div>
                    <h3>{item.designation}</h3>
                    <a href={item.companyLink}>{item.name}</a>
                    <p>{item.dated}</p>
                  </div>
                  <LogoLink href={item.companyLink}>
                    <img src={item.logo} alt="company" width="175px"/>
                  </LogoLink>
                </StepperHead>
                <StepperDesc dangerouslySetInnerHTML={{__html: item.description}} />
              </Stepper>
              </div>
            ))
          }
    </div>
    </WorkWrapper>

    <EdWrapper>
      <h1>Education</h1>
      <EdContent>
        {
          grad.map(item => (<div key={item.id}>
            <p><i>{item.name}</i><br/><br/>
            {item.dated}<br/><br/>
            {item.degree} in {item.major}<br/><br/>
            Concentration in {item.concentration}<br/><br/>
            </p>
            </div>))
        }
      </EdContent>
      <h1>Certifications</h1>
      <EdContent>
        {
          cert.map(item => (<div key={item.id}>
            <p><i>{item.name}</i><br/><br/>
            <a href="https://www.youracclaim.com/badges/bce640da-65eb-46de-bb09-9d561770f3d5/linked_in_profile">{item.certification}</a> 
            </p>
            </div>))
        }
      </EdContent>
      <h1>Interests</h1>
      <EdContent>
        {
          hobby.map(item => (<div key={item.id}>
            <p>{item.name}</p>
            </div>))
        }
      </EdContent>
      <h1>Language</h1>
      <EdContent>
        {
          lang.map(item => (<div key={item.id}>
            <p>{item.name}</p>
            </div>))
        }
      </EdContent>
    </EdWrapper>
  </ExperienceWrapper>
  </Layout>
)

export default Experience
