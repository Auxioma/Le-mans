import React, { useState } from 'react'
import { motion } from "framer-motion"
import shap_1 from "../../../assets/images/shape/shape-1.png"
import ServicesFour from '../services/servicesFour'
import { slideUp } from '../../../utlits/slideUp'
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";

const BannerThree = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className="hero-area">
                <div className="container-fluid">
                    <motion.div className="hero-content"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp(1)}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="title">
                            <span className="d-block">Cyber Hygiene:</span>
                            <h1>A Proactive Approach to Digital Security.</h1>
                            <p>In today's increasingly digital world, cybersecurity has become paramount. With the rapid expansion of online activities, the threat landscape...</p>
                        </div>
                        <div className="hero-button d-flex align-items-center">
                            <a className="demo text-decoration-none" href="contact.html">
                                Request A Demo
                                <div className="dote"></div>
                            </a>
                            <div className="play-btn d-flex align-items-center">
                                <div onClick={() => setOpen(true)} className="text-decoration-none popup-youtube icon">
                                    <i className="ri-play-mini-fill"></i>
                                </div>
                                <div onClick={() => setOpen(true)} className="text-decoration-none popup-youtube text-white ">
                                    Watch Intro Video
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="shape-1">
                    <img src={shap_1} alt="hero-shape" />
                </div>
                <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="0O2aH4XLbto"
                    onClose={() => setOpen(false)}
                />
            </section>
            <ServicesFour style={"pb-75 top-70"} />
        </>
    )
}

export default BannerThree