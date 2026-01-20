import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/scss/timeline.scss'
import { experiences } from "../experiences";

const Timeline = () => {
    return (
        <div id="experiences">
            <div className="items-container">
                <div className="section-header">
                    <h2 className="title">Experiences</h2>
                    <div className="underline"></div>
                </div>
                <VerticalTimeline>
                    {
                        experiences.map((item, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                                // contentArrowStyle={{ borderRight: '7px solid  white' }}
                                date={item.date}
                                iconStyle={{ background: 'rgba(80, 0, 202, 1)', color: 'rgb(39, 40, 34)' }}
                                icon={<FontAwesomeIcon icon={faLaptopCode} />}
                            >
                                <div className="vertical-timeline-content">
                                    <div className="vertical-timeline-element-logo">
                                        <img src={item.companyLogo} height={40} />
                                    </div>
                                    <div>
                                        <h4 className="vertical-timeline-element-title">
                                            {item.company}
                                        </h4>
                                        <h5 className="vertical-timeline-element-subtitle">{item.title}</h5>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                        ))
                    }

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Timeline