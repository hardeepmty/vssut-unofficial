import React from 'react'
import VSSUT from './VSSUT.jpg';
import logo from './logo.png' ;
import majhi from './majhi.jpeg' ;
import ground from './ground.png';
import students from './students.jpg' ;
import bck from './bck.jpg' ;
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    <div className='content'>
      <img className='logo' src={logo}/>
      <img className='vssut' src={VSSUT}/>
      
      <div className='apply'>
       <div className='words'>
        <h3>Apply for Admission</h3>
        <h6>Fall 2023 applications are open</h6><br/>
        <p>We don't just give students an education and experinces that set them 
          up for success in a career. We help them succeed in their career-
          to discover a field they are passionate about and dare to lead it.
          <br/><br/><br/>
          <button className='applyBtn'><a href='https://vssut.ac.in/'>Click Here To Apply</a></button>
        </p>
        </div>
        <div className='vc'>
          <img className='majhi' src={majhi}/>
        </div>
      </div>

      <div className='alumniNet'>
      <div className='alumni'>
          <img className='ground' src={ground}/>
      </div>
      <div className='officialAlumni'>
        <h4>Alumni Network</h4>
        <p>Welcome to the Official Alumni Network of Veer Surendra Sai University of Technology (Formerly UCE), Burla - A interactive networking platform
           for the alumni of VSSUT to connect with each other - thus forging and reinforcing relationships formed in their student years at VSSUT.</p>
           <button className='applyBtn'><a href='https://www.vssutalumni.org/'>Official Alumni Assn.</a></button>
      </div>
      </div>

      <div className='features'>
        <div className='card1'>
          <h4>Certified Teachers</h4>
          <p>Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic </p>
        </div>
        <div className='card2'>
          <h4>Special Education</h4>
          <p>Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic </p>
        </div>
        <div className='card1'>
          <h4>Books & Library</h4>
          <p>Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic </p>
        </div>
        <div className='card2'>
          <h4>Sports Clubs</h4>
          <p>Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic </p>
        </div>
      </div>

      <div className='login'>
        <div className='qs'>
        <h4>Already a student?</h4>
        <p>
          Be a part of VSSUT community by signing up and stay updated with all the latest things going on both on and off campus.
        </p>
        <h6>Click on the below link to register.</h6>
        <button className='login2'><Link to="/signup" className='link'>Student login</Link></button>
        </div>
        <div className='ans'>
          <img className='students' src={students}/>
        </div>
      </div>

      <div className='tag'>
        <h4>We believe in proper education & Quality knowledge</h4>
      </div>

    </div>
  )
}
