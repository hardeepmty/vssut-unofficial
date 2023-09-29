import React from 'react';
import { Link } from 'react-router-dom';


export default function Scrollbar() {
  return (
    <div  className='scrollbar'>
        <h4 className='explore'>EXPLORE!</h4>
        <ul className="sidebar-navigation">
        <li className="nav-item">
        <Link to="/" className='mylink'>Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/campus" className='mylink'>Student Zone</Link>
        </li>
        <li className="nav-item">
        <Link to="/signup" className='mylink'>Student login</Link>
        </li>
        <li className="nav-item">
          <Link to="/festivals" className='mylink'>Your Profile</Link>
        </li>
        <li className="nav-item">Library</li>
        <li className="nav-item">Events</li>
        <li className="nav-item">Club Updates</li>
        <li className="nav-item">
        <Link to="/studentzone" className='mylink'>Important</Link>
        </li>
      </ul>
      <hr className="dropdown-divider"/>
        <h4>ACADEMICS</h4>
        <ul className="sidebar-navigation">
        <li className="nav-item"><Link to="/courses" className='mylink'>Courses</Link></li>
        <li className="nav-item"><Link to="/Tnp" className='mylink'>Training & Placement</Link></li>
        <li className="nav-item"><Link to="/contact" className='mylink'>Contact Us</Link></li>
      </ul>
        <p>Developed by All India On-Line Pvt. Ltd.</p>
        <p>© 2023 Veer Surendra Sai University of Technology - All Rights Reserved.</p>
    </div>
  )
}
