import React from 'react'
import author from '../me.jpeg';

function AboutMe() {
  return (
    <div className="cintainer py-5">
        <div className="row">
            <div className="col-lg-6 col-mx-12">
                <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="author..."/>
                </div>
            </div>
            <div className="col-lg-6 col-mx-12">
            <h1 className="about-heading">About Me</h1>
                <p>
                <p>
                Full Stack Developer | Node.js | React.js | Javascript | MySQL | Mongodb | Java | Python 
Actively learning and improving skills in Machine Learning and Deep Learning applications.
</p>
Hello Everyone! I am Jamal Massalha, a meticulous and diligent professional new graduate from National College Of Ireland with a First Class Honours degree in Computing In Science. with hands-on experience in designing/developing multiple websites, applications, and various SQL databases.
Throughout my career, I have remained a resourceful and results-driven professional with record of developing effective patient care plans in coordination with healthcare professionals.
Excel at creating websites and user interfaces, using standard HTML / CSS practices.
My area of expertise are as follows:

* Application Development
* Web Development
* Database Management
* Software Architecture
* Data Structure and Algorithms 

I'm well renowned for performing comprehensive physical assessments and providing individualised patient care. Moreover, I am capable of analysing and modifying existing software while designing and evaluating end-user applications. Knowledgeable in utilising best and effective software development practices to write clear and well-tested code.
I have the ability to incorporate data from back-end databases to automate integration and performance.
Connect with me today or send me an email at jamalmssalha2@gmail.com if you want to discuss additional details regarding my work experience and the skills I have to offer
                </p>
            </div>
        </div>    
    </div>
  )
}

export default AboutMe