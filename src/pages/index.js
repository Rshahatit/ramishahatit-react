import React from 'react'
import RashSelfIcon from '../assets/images/rashmi.svg'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Rami <span>Shahatit</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hi, I'm Rami. I am a
        security enthusiast/software developer, surfer and proud Jordanian American
        based out of San Francisco.
        </p>
        <DownloadButton href="https://github.com/Rshahatit/ramishahatit/raw/master/Rami%20Nader%20Shahatit%20Resume.pdf"  download title="Resume">Download Resume</DownloadButton>
      </div>
      <img src={RashSelfIcon} alt="rashmi self" />
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage