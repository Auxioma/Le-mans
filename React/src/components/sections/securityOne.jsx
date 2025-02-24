import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { zoomIn } from '../../utlits/zoomIn'
import Title from '../common/title'

const Icon = () => {
    return (
        <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
                <g clipPath="url(#clip0_404_5)">
                    <mask id="mask0_404_5" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="86" height="86">
                        <path d="M86 0H0V86H86V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_404_5)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.5 0H0V43H21.5C9.62589 43 0 52.626 0 64.5V86H43V64.5C43 76.374 52.626 86 64.5 86H86V43H64.5C76.374 43 86 33.3741 86 21.5V0H43V21.5C43 9.62589 33.3741 0 21.5 0ZM43 43H21.5C33.3741 43 43 52.626 43 64.5V43ZM43 43V21.5C43 33.3741 52.626 43 64.5 43H43Z" fill="url(#paint0_linear_404_5)" />
                    </g>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_404_5" x1="43" y1="0" x2="43" y2="86" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A7B5FF" />
                        <stop offset="1" stopColor="#F3ACFF" />
                    </linearGradient>
                    <clipPath id="clip0_404_5">
                        <rect width="86" height="86" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

const SecurityOne = () => {
    const securityTypes = [
        {
            id: 1,
            icon: <Icon />,
            security_name: "Unleashing Ability through Network Management.",
            link: "/service-details"
        },
        {
            id: 2,
            icon: <Icon />,
            security_name: "Building a Robust Defense Against Cyber-Attacks",
            link: "/service-details"
        },
        {
            id: 3,
            icon: <Icon />,
            security_name: "Harnessing the Power of Online Network Security Systems.",
            link: "/service-details"
        },

    ]
    return (
        <section className="security-area style-2 pt-100 pb-75">
            <div className="container">
                <Title sectionName="What We Do" sectionTitle="Our Extensive Network Security Services. " style={"style-2"}/>
                <div className="row justify-content-center" data-cues="fadeIn" >
                    {
                        securityTypes.map(({ icon, id, link, security_name }) => {
                            return (
                                <motion.div className="col-lg-4 col-md-6" key={id}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-security-item d-flex align-items-center">
                                        {icon}
                                        <div className="content">
                                            <h3>
                                                <Link className="text-decoration-none" href={link}>{security_name}</Link>
                                            </h3>
                                            <Link className="read-more text-decoration-none" href={link}>
                                                Read More
                                                <i className="ri-arrow-right-line"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="background-ellipse"></div>
        </section>
    )
}

export default SecurityOne




