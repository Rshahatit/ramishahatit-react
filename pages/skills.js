import React from 'react'
import skills from '../data/skills'
import LogoLink from '../styles/workStyle.js'
import { RecWrapper, RecBox } from '../styles/recStyle.js'
import Layout from '../components/layout'

const Skills = () => (
  <Layout>
  <RecWrapper>
      <h1>Skills</h1>
      <ul>{
            skills.map(item => (<RecBox key={item.id} >
                  <div>
                    <li><h3>{item.name}</h3></li>
                  </div>
                  {/* <LogoLink> 
                    <img src={item.icon} alt="language" width="175px"/>
                  </LogoLink> */}
              </RecBox>
            ))
          }</ul>
    </RecWrapper>
  </Layout>
)

export default Skills
