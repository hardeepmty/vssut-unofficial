import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Table from './Table'

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div className='content'>
      <img src='me.jpg' className='me'/><br/>
      <div className='myprofile'>
      <h2 className='name'>HARDEEP MOHANTY</h2>
      <h6 className='branch'>Computer Science and Engineering</h6><br/>
      <div className='table'>
      <Table/>
      </div>
      </div>
    </div>
  );
}