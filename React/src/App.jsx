import React from 'react'
import { motion } from "framer-motion"
import { ScrollRestoration } from 'react-router-dom'
import BannerOne from './components/sections/banners/bannerOne'
import SecurityOne from './components/sections/securityOne'
import AboutOne from './components/sections/abouts/aboutOne'
import ServicesOne from './components/sections/services/servicesOne'
import ProjectOne from './components/sections/projectOne'
import Countter from './components/sections/countter'
import { teamData } from './utlits/fackData/teamData'
import TeamCard from './components/sections/teamCard'
import { FaqDataOne } from './utlits/fackData/faqDataOne'
import According from './components/common/according'
import ArrowShap from './assets/icons/arrowShap'
import BlogCard from './components/sections/blogCard'
import { blogData } from './utlits/fackData/blogData'
import PartnersSlider from './components/sections/partnersSlider'
import { partnerDataTwo } from './utlits/fackData/partnerDataTwo'
import { slideUp } from './utlits/slideUp'
import { zoomIn } from './utlits/zoomIn'
import Title from './components/common/title'
const App = () => {

  return (
    <>
      <BannerOne />
      <SecurityOne />
      <AboutOne />
      <ServicesOne />
      <ProjectOne />
      {/* ------------ Faq section --------- */}
      <div className="faq-area pb-75">
        <div className="container">
          <motion.div className="row"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp()}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="title">
                  <span className="d-block">FAQs</span>
                  <h2>A Dedication to Supporting All Aspects of Your Life.</h2>
                </div>
                <p>Can’t find what you are looking for?</p>
                <h3>Let's Talk: Engage with Us in a Conversation Tailored Just for You.</h3>
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clipPath="url(#clip0_428_39)">
                      <path d="M9.375 11.458C8.8 11.458 8.33333 10.9924 8.33333 10.4164C8.33333 9.05387 9.41458 8.45908 9.87604 8.20492C10.1781 8.03929 10.4958 7.64762 10.399 7.0945C10.3271 6.68616 9.98021 6.33929 9.57292 6.26846C9.25417 6.21012 8.94583 6.29137 8.70625 6.49346C8.46875 6.69137 8.33333 6.98304 8.33333 7.29242C8.33333 7.86846 7.86667 8.33408 7.29167 8.33408C6.71667 8.33408 6.25 7.86846 6.25 7.29242C6.25 6.36637 6.65729 5.49346 7.36667 4.89762C8.07604 4.30179 9.00937 4.04971 9.93229 4.21741C11.1917 4.43721 12.2281 5.47262 12.45 6.73512C12.6823 8.06012 12.0521 9.38408 10.8812 10.031C10.4156 10.2872 10.4156 10.3622 10.4156 10.4174C10.4156 10.9935 9.94896 11.4591 9.37396 11.4591L9.375 11.458ZM9.375 12.4997C8.65625 12.4997 8.07292 13.083 8.07292 13.8018C8.07292 14.5205 8.65625 15.1039 9.375 15.1039C10.0938 15.1039 10.6771 14.5205 10.6771 13.8018C10.6771 13.083 10.0938 12.4997 9.375 12.4997ZM20.8292 9.45804C20.8229 10.2591 20.7344 11.0393 20.5708 11.7935C21.999 12.9403 22.9167 14.6966 22.9167 16.6664V21.8747C22.9167 22.4497 22.45 22.9164 21.875 22.9164H16.6667C14.6969 22.9164 12.9406 21.9987 11.7937 20.5705C11.0396 20.733 10.2594 20.8226 9.45833 20.8289C10.901 23.3174 13.5885 24.9997 16.6667 24.9997H21.875C23.601 24.9997 25 23.6007 25 21.8747V16.6664C25 13.5882 23.3177 10.9007 20.8292 9.45804ZM18.726 10.0528C18.9187 7.33096 17.926 4.66742 16.0042 2.7445C14.0823 0.821582 11.4208 -0.174251 8.69687 0.0236655C3.98229 0.356999 0 4.77991 0 9.68304V14.931C0 17.0362 1.71042 18.7497 3.81354 18.7497H8.47708C13.8802 18.7497 18.3823 14.9299 18.726 10.0528ZM14.5312 4.21846C16.0271 5.71325 16.7979 7.78617 16.649 9.90596C16.3854 13.633 12.7198 16.6653 8.47708 16.6653H3.81354C2.85938 16.6653 2.08333 15.8872 2.08333 14.9299V9.682C2.08333 5.832 5.17917 2.36012 8.84375 2.10075C9.01771 2.08825 9.19063 2.082 9.36354 2.082C11.299 2.082 13.1594 2.8445 14.5312 4.21846Z" fill="#FF8408" />
                    </g>
                  </svg>
                  <ArrowShap />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className='faq-questions'>
                <div className='questions-content'>
                  <div className="accordion" id="accordionExample">
                    {
                      FaqDataOne.slice(0, 5).map(({ ans, id, question }) => <According key={id} ans={ans} id={id} parentId={"accordionExample"} question={question} showId={"two"} />)
                    }
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div >
      {/* ------------ Faq section --------- */}

      <Countter />
      {/* ----------- Team seaction---------- */}
      <div className="team-area  pb-75">
        <div className="container">
          <Title sectionName={"Our Team"} sectionTitle={"Meet Our Awesome Team Members."} style={"style-2"}/>
          <div className="row">
            {
              teamData.slice(0, 4).map(({ id, name, position, social_media, src }) => {
                return (
                  <motion.div key={id} className="col-lg-3 col-sm-6"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={zoomIn(id)}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <TeamCard id={id} name={name} position={position} social_media={social_media} src={src} />
                  </motion.div>
                )
              })
            }
          </div>
        </div>
        <div className="bg-ellipse"></div>
      </div>
      {/* ----------- Team seaction---------- */}

      {/* ---------- BLog section ----------- */}
      <section className={`blog-area pb-75 style-2`}>
        <div className="container">
          <Title sectionName={"Our Blog"} sectionTitle={"Latest Blog & Articles"} style={"style-2"}/>
          <div className="row justify-content-center" >
            {
              blogData.slice(0, 3).map(({ author, date, id, link, thumb, title, author_link }) => {
                return (
                  <motion.div key={id} className="col-lg-4 col-md-6"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={zoomIn(id)}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <BlogCard author={author} date={date} author_link={author_link} link={link} style={"style-2"} thumb={thumb} title={title} />
                  </motion.div>
                )
              })
            }
          </div>
        </div>
      </section>
      {/* ---------- BLog section ----------- */}
      <div className="partner-area style-2 pb-75">
        <div className="container">
          <PartnersSlider data={partnerDataTwo} />
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default App