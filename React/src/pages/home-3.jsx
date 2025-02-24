import React from 'react'
import { motion } from "framer-motion"
import BannerThree from '../components/sections/banners/bannerThree'
import AboutThree from '../components/sections/abouts/aboutThree'
import ServicesThree from '../components/sections/services/servicesThree'
import ChooseUs from '../components/sections/chooseUs'
import PricingGrid from '../components/sections/pricingGrid'
import { ScrollRestoration } from 'react-router-dom'
import { blogData } from '../utlits/fackData/blogData'
import BlogCard from '../components/sections/blogCard'
import { zoomIn } from '../utlits/zoomIn'
import Title from '../components/common/title'

const HomeThree = () => {
  return (
    <>
      <BannerThree />
      <AboutThree />
      <ServicesThree />
      <ChooseUs />
      <PricingGrid />
      {/* ---------- BLog section ----------- */}
      <section className={`blog-area pb-75 `}>
        <div className="container">
          <Title sectionName={"Our Blog"} sectionTitle={"Latest Blog & Articles"}/>

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
                    <BlogCard author={author} date={date} author_link={author_link} link={link} style={""} thumb={thumb} title={title} />
                  </motion.div>
                )
              })
            }
          </div>
        </div>
      </section>
      {/* ---------- BLog section ----------- */}
      <ScrollRestoration />
    </>
  )
}

export default HomeThree