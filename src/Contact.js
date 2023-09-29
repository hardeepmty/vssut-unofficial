import React from 'react'
import cmap from './cmap.png'
import omap from './omap.png'

export default function Contact() {
  return (
    <div className='content'>
      <h1>Reach VSSUT</h1>
       <p>
       VSSUT (formerly UCE Burla) is located in Sambalpur district of Odisha (Western Part). The famous town Burla and Sambalpur serves as the gateway to the bewitching western part of Odisha. It is the Divisional Head Quarters of the Northern Revenue division and a very important commercial centre. There are direct trains connecting Sambalpur to Bhubaneswar, Kolkata, Mumbai, New Delhi, Chennai and various other parts of the country. The state capital Bhubaneswar is well connected through NH-42 and East Coast railway. Burla and Sambalpur are both well connected by Roadways with major cities of India like Cuttack, Bhubaneswar, Raipur, Hyderabad etc. The nearby airports are at Jharsuguda (60 Km. distance), Bhubaneswar (300 km. distance) and Raipur (250 km. distance). Places like the world famous Hirakud Dam, the leaning Temple of Huma and the wild life Sanctuary of Badrama water fall and Ghanteswari Temple surround Burla. 
       VSSUT, Burla is in the center of Steel, Aluminium and Mega power industries.
       </p>
       <img className='cmap' src={cmap}></img>
       <img className='omap' src={omap}></img>

       <h1>Nearest Railway Station</h1>
       <ul>
        <li>Sambalpur Jn(10km)</li>
        <li>Hirakud Station(2km)</li>
        <li>Jharsaguda Station(55km)</li>
       </ul>

       <h1>Nearest Airport</h1>
       <p>Veer Surendra Sai Airport -Jharsuguda (60 km. distance)
         (Connected to Bhubaneswar, Raipur, Ranchi, Kolkata,
          New Delhi & Hyderabad)
       </p>

       <h1>Other Institutes and Facilities Near VSSUT are:</h1>
       <ul>
        <li>VSS Medical College & Hospital (VIMSAR)-1KM</li>
        <li>IIM Sambalpur-10kms</li>
        <li>Sambalpur University-4kms</li>
        <li>Gangadhar Meher University-10kM</li>
        <li>Mahanadi Coal Field Ltd. (MCL) Headquarter-1km.</li>
        <li>WESCO Headquarter-1km</li>
        <li>Hirakud Power House-6km</li>
        <li>Hindalco Alumnium & Power Complex-8kms</li>
       </ul>
    </div>
  )
}
