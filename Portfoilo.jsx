import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import { MdOutlineMoveToInbox } from "react-icons/md";



export default function Portfoilo() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set animation duration
            once: true, // Animation occurs only once
        });
    }, []);

    return (
        <div>
            <div style={{ color: 'white' }} className="portbackground">
                {/* About Me section with fade-up-right */}
                <h1
                    style={{ color: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    data-aos="fade-up-right"
                >
                    About me
                </h1>

                {/* Personal Infos with fade-up-right */}
                <h1
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    data-aos="fade-up-right"
                >
                    Personal Infos
                </h1>

                <div style={{ color: 'white' }} className="aa">
                    <div style={{ color: 'white' }} className="portabout">
                        <div style={{ display: 'flex', gap: '5rem' }} className="p" data-aos="fade-up-right">
                            {/* First Column */}
                            <div className="pp">
                                <b>
                                    <p>First Name : Abdul</p>
                                    <p>Age : 19</p>
                                    <p>Freelancer : Available</p>
                                    <p>Phone : +92 301 3618697</p>
                                    <p>Skype : Abdul Ahad</p>
                                </b>
                            </div>

                            {/* Second Column */}
                            <div className="pp">
                                <b>
                                    <p>Last Name : Ahad</p>
                                    <p>Nationality : Pakistan</p>
                                    <p>Adress : Bahawalpur..</p>
                                    <p>Email : ahad83392@gmail.com</p>
                                    <p>Languages : Urdu, English</p>
                                </b>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section with fade-up-right */}
                    <div className="portexp">
                        <div className="boxer">
                            {/* Box 1 */}
                            <div className="box" data-aos="fade-up-right">
                                <br />
                                <h1 style={{ color: 'yellow' }}>01+</h1>
                                <h4>
                                    -Year of <br />Experience
                                </h4>
                            </div>

                            {/* Box 2 */}
                            <div className="box" data-aos="fade-up-right">
                                <br />
                                <h1 style={{ color: 'yellow' }}>04</h1>
                                <h4>
                                    -Projects <br />Completed
                                </h4>
                            </div>

                            {/* Box 3 */}
                            <div className="box" data-aos="fade-up-right">
                                <br />
                                <h1 style={{ color: 'yellow' }}>All</h1>
                                <h4>
                                    -Customers <br />Happy
                                </h4>
                            </div>

                            {/* Box 4 */}
                            <div className="box" data-aos="fade-up-right">
                                <br />
                                <h1 style={{ color: 'yellow' }}>No</h1>
                                <h4>
                                    -Awards <br />Granted
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br /><br />

                {/* My Skills section with fade-up-right */}
                <h1
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    data-aos="fade-up-right"
                >
                    My Skills
                </h1>

                <br /><br />

                {/* Progress Section */}
                <div className="circle-container" data-aos="fade-up-right"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 150px)', gap: '20px', justifyContent: 'center' }}>
                    <div>
                        <div className="circle" style={{
                            position: 'relative',
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            background: 'conic-gradient(#ff6f00 calc(90 * 1%), #333 calc(25 * 1%))'

                        }}
                            data-aos="fade-up-right"
                        >
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                right: '10px',
                                bottom: '10px',
                                backgroundColor: '#1f1f1f',
                                borderRadius: '50%',
                                zIndex: 1,
                            }}
                                data-aos="fade-up-right"
                            ></div>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '28px',
                                color: 'white',
                                zIndex: 2,
                            }}
                                data-aos="fade-up-right"
                            >90%</div>
                        </div>
                        <div className="label" style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>HTML</div>
                    </div>

                    <div>
                        <div className="circle" style={{
                            position: 'relative',
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            background: 'conic-gradient(#ff6f00 calc(80 * 1%), #333 calc(89 * 1%))'
                        }}
                            data-aos="fade-up-right"
                        >
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                right: '10px',
                                bottom: '10px',
                                backgroundColor: '#1f1f1f',
                                borderRadius: '50%',
                                zIndex: 1,
                            }}
                                data-aos="fade-up-right"
                            ></div>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '28px',
                                color: 'white',
                                zIndex: 2,
                            }}
                                data-aos="fade-up-right"
                            >80%</div>
                        </div>
                        <div className="label" style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>CSS</div>
                    </div>

                    <div>
                        <div className="circle" style={{
                            position: 'relative',
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            background: 'conic-gradient(#ff6f00 calc(78 * 1%), #333 calc(95 * 1%))'
                        }}
                            data-aos="fade-up-right"
                        >
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                right: '10px',
                                bottom: '10px',
                                backgroundColor: '#1f1f1f',
                                borderRadius: '50%',
                                zIndex: 1,
                            }}
                                data-aos="fade-up-right"
                            ></div>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '28px',
                                color: 'white',
                                zIndex: 2,
                            }}
                                data-aos="fade-up-right"
                            >78%</div>
                        </div>
                        <div className="label" style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>Bootstrap</div>
                    </div>

                    <div>
                        <div className="circle" style={{
                            position: 'relative',
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            background: 'conic-gradient(#ff6f00 calc(50 * 1%), #333 calc(50 * 1%))'
                        }}
                            data-aos="fade-up-right"
                        >
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                right: '10px',
                                bottom: '10px',
                                backgroundColor: '#1f1f1f',
                                borderRadius: '50%',
                                zIndex: 1,
                            }}
                                data-aos="fade-up-right"
                            ></div>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '28px',
                                color: 'white',
                                zIndex: 2,
                            }}
                                data-aos="fade-up-right"
                            >50%</div>
                        </div>
                        <div className="label" style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}
                            data-aos="fade-up-right"
                        >React</div>
                    </div>
                </div>


                {/* now Education part */}
                <br /><br />
                <h1 style={{ textAlign: 'center' }}>Education And Experience</h1>

                <div className="educ container">

                    <div className="edu">
                    <MdOutlineMoveToInbox className='inbox' /><h3 style={{textAlign:'center'}}>Matric</h3><h5 style={{textAlign:'center'}}>Got 97% <br />Done in 2019-20</h5>
                    </div>

                    <div className="edu">
                    <MdOutlineMoveToInbox className='inbox' /><h3 style={{textAlign:'center'}}>Intermidiate</h3><h5 style={{textAlign:'center'}}>Got 80% <br />Done in 2021-22</h5>
                    </div>

                    <div className="edu">
                    <MdOutlineMoveToInbox className='inbox' /><h3 style={{textAlign:'center'}}>BS IN Artificial Intelligence</h3><h5 style={{textAlign:'center'}}>Continue in semester 3rd <br />2023-27</h5>
                    </div>

                    <div className="edu">
                    <MdOutlineMoveToInbox className='inbox' /><h3 style={{textAlign:'center'}}>Web Development</h3><h5 style={{textAlign:'center'}}>Done aproximately <br />Front end development</h5>
                    </div>

                    





                </div>
                



                




            </div>
        </div>
    );
}
