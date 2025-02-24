import React from 'react'
import {motion} from "framer-motion"
import BannerTwo from '../components/sections/banners/bannerTwo'
import AboutTwo from '../components/sections/abouts/aboutTwo'
import SecurityTwo from '../components/sections/securityTwo'
import ServicesTwo from '../components/sections/services/servicesTwo'
import TestimonialSlider from '../components/sections/testimonialSlider'
import { ScrollRestoration } from 'react-router-dom'
import { blogData } from '../utlits/fackData/blogData'
import BlogCard from '../components/sections/blogCard'
import ChooseUsTwo from '../components/sections/chooseUsTwo'
import PartnersSlider from '../components/sections/partnersSlider'
import { partnerDataOne } from '../utlits/fackData/partnerDataOne'
import { zoomIn } from '../utlits/zoomIn'
import Title from '../components/common/title'

const HomeTwo = () => {
    return (
        <>
            <BannerTwo />
            <SecurityTwo />
            <AboutTwo />
            <ServicesTwo />
            <ChooseUsTwo />
            <TestimonialSlider />
            {/* ---------- BLog section ----------- */}
            <section className={`blog-area pb-75 style-3`}>
                <div className="container">
                    <Title sectionName={"Our Blog"} sectionTitle={"Latest Blog & Articles"} style={"style-3"}/>

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
                                        <BlogCard author={author} date={date} author_link={author_link} link={link} style={"style-3"} thumb={thumb} title={title} />
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* ---------- BLog section end ----------- */}
            
            <div className="partner-area style-3 pt-100 pb-75">
                <div className="container">
                    <Title sectionName={"Partners Paheli"} sectionTitle={"2300+ Global Society Place Their Trust in Our Services"}/>

                    <PartnersSlider data={partnerDataOne} />
                </div>
            </div>
            <ScrollRestoration />
        </>
    )
}

export default HomeTwo