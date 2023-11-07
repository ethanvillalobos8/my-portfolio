import React from 'react';

const SkillSet = ( {section} ) => {
    return (
        <section class="skills-section my-12 px-20 md:px-10 lg:px-8">
            <div class="container mx-auto">
                <h2 class={`text-7xl tracking-wide font-semibold mb-10 ${section === 'skills' ? 'transition ease-in duration-250 text-[#af70b3]': 'transition ease-out duration-1000'}`} style={{ fontFamily: 'museoBold' }}>Skillset.</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div class="skill">
                        <h3 class="skill-title text-2xl font-semibold mb-2" style={{ fontFamily: 'museoBold' }}>Machine Learning & Analysis</h3>
                        <p class="skill-description font-thin text-sm text-justify">
                            Deeply involved in predictive analysis for railway safety, honing advanced skills in regression models, data analysis, and Python programming.
                        </p>
                    </div>

                    <div class="skill">
                        <h3 class="skill-title text-2xl font-semibold mb-2" style={{ fontFamily: 'museoBold' }}>Technical Writing & Communication</h3>
                        <p class="skill-description font-thin text-sm text-justify">
                            Adept at transforming complex technical information into clear, concise, and actionable content, sharpened through research assistance and analytics reporting.
                        </p>
                    </div>

                    <div class="skill">
                        <h3 class="skill-title text-2xl font-semibold mb-2" style={{ fontFamily: 'museoBold' }}>Web Development & Design</h3>
                        <p class="skill-description font-thin text-sm text-justify">
                            Proven expertise in enhancing user experiences and website traffic through comprehensive redesigns, with a strong foundation in Bootstrap, CSS, HTML, and JavaScript.
                        </p>
                    </div>

                    <div class="skill">
                        <h3 class="skill-title text-2xl font-semibold mb-2" style={{ fontFamily: 'museoBold' }}>Project Management & Strategy</h3>
                        <p class="skill-description font-thin text-sm text-justify">
                            Demonstrated leadership in overseeing projects from conception to completion, driving growth through strategic planning and data-driven insights.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SkillSet;
