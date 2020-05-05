import React from 'react'
import RamiSelfIcon from '../assets/images/rami_wfh.png'
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
        security enthusiast, software developer, and proud Jordanian American
        based out of San Francisco.
        </p>
        <DownloadButton href="https://github.com/Rshahatit/ramishahatit-react/raw/master/Rami_Shahatit_Resume_2020%20(2).pdf"  download title="Resume">Download Resume</DownloadButton>
      </div>
      <img src={RamiSelfIcon} alt="rami self" />
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
