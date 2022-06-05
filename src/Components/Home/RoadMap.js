import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const RoadMap = () => {
    return (
        <div className='my-9'>
            {/* text  */}
            <div className='text-center font-bold'>
                <h1 className='text-center text-2xl mb-4'>Road Map</h1>
                <div className='w-8 border-t-4 mx-auto border-orange-500 my-6'></div>
                <h1 className='text-4xl	'>
                    The Journey of
                    <br />
                    Monteno NFT
                </h1>
            </div>
            {/* timeline  */}
            <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(69, 38, 177)', color: '#fff' }}
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title text-orange-600">February 01, 2022</h3>
                        <h4 className="vertical-timeline-element-subtitle">Idea Generation</h4>
                        <p>
                            Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(69, 38, 177)', color: '#fff' }}
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title text-orange-600">March 30, 2022</h3>
                        <h4 className="vertical-timeline-element-subtitle">Design & Development</h4>
                        <p>
                            Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(69, 38, 177)', color: '#fff' }}
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title text-orange-600">April 20, 2022</h3>
                        <h4 className="vertical-timeline-element-subtitle">Initial Release</h4>
                        <p>
                            Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(69, 38, 177)', color: '#fff' }}
                        date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title text-orange-600">May 30, 2022</h3>
                        <h4 className="vertical-timeline-element-subtitle">Result & Final Report</h4>
                        <p>
                            Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default RoadMap;