import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/scss/timeline.scss'
import { experiences } from "../experiences";

const Timeline = () => {
    return (
        <div id="experiences">
            <div className="items-container">
                <h1>Experiences</h1>
                <VerticalTimeline>
                    {
                        experiences.map((item) => (
                            <VerticalTimelineElement
                                key={item.id}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                                contentArrowStyle={{ borderRight: '7px solid  white' }}
                                date={item.date}
                                iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                                icon={<FontAwesomeIcon icon={faBriefcase} />}
                            >
                                <div className="vertical-timeline-element-logo">
                                    <img src={item.companyLogo} height={40} />
                                </div>
                                <h4 className="vertical-timeline-element-title">
                                    {item.company}
                                </h4>
                                <h5 className="vertical-timeline-element-subtitle">{item.title}</h5>
                            </VerticalTimelineElement>
                        ))
                    }

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Timeline