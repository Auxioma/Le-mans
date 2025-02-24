import React, { useState } from 'react'
import { motion } from "framer-motion"
import banner_wapper_shap from "../../../assets/images/hero/banner-wrapper-shape.png"
import banner_wapper_image from "../../../assets/images/hero/banner-wrapper-1.png"
import banner_wapper_image_shap from "../../../assets/images/hero/banner-wrapper-image-shape.png"
import { slideUp } from '../../../utlits/slideUp'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";

const BannerTwo = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="banner-wrapper-area">
            <div className="container-fluid">
                <div className="row"
                >
                    <div className="col-lg-7">
                        <motion.div className="banner-wrapper-content"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(1)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <div className="title">
                                <span className="d-block">Cybersecurity Unleashed:</span>
                                <h1>Securing the Digital Frontier with Vigilance and Innovation.</h1>
                                <p>In today's increasingly digital world, cybersecurity has become paramount. With the rapid expansion of online activities, the threat landscape...</p>
                            </div>
                            <div className="banner-wrapper-button d-flex align-items-center">
                                <Link className="demo text-decoration-none" to="/contact">
                                    Request A Demo
                                    <div className="dote"></div>
                                </Link>
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
                    <div className="col-lg-5">
                        <motion.div className="banner-wrapper-image"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(2)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img src={banner_wapper_image} alt="banner-wrapper" />
                            <div className="bg-shape">
                                <img src={banner_wapper_image_shap} alt="shape" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="banner-wrapper-shape" >
                <img src={banner_wapper_shap} alt="shape" />
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="0O2aH4XLbto"
                onClose={() => setOpen(false)}
            />
        </section>
    )
}

export default BannerTwo