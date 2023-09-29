import React from 'react'
import placement from './placement.png' ;

export default function StudentZone() {

  return (
    <div className='content'>
      <h1>Student Zone</h1><h6 className='ignore'>hvhehvebhbfjkwbdfjwbfrjbfhbfhjvbfvbhvfhjsbffshjvfb</h6>
     <div className='marquee-container'>
      <div className='marquee'>
        <span><a href='#'>1.Contact Number for Teaching and Non Teaching Recruitment</a></span>
        <span><a href='#'>2.Announcement of Mid-semester Results</a></span>
        <span><a href='#'>3.Hostel Allotment</a></span>
        <span><a href='#'>4.Fees Payment</a></span>
        <span><a href='#'>5.Semester Registration</a></span>
      </div>
     </div>

     <div className='img-mover'>
      <h3>Image corousel</h3>
     </div>

     <div className='placementList'>
      <h3>Placement-2023</h3>
      <img src={placement} className='placement'/>
     </div>

    </div>
  )
}
