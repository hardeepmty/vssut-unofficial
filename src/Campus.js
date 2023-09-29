import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import React from 'react'

export default function Campus() {
  return (
     <Box>
      <div className='content'>
      <h1 className='sz'>STUDENT ZONE</h1>
      </div>
      <Card sx={{ mt:15, ml:45,mb:10, bgcolor:"rgba(22, 30, 40, 0.581)",color:"white", boxShadow:" 0px 2px 4px 2px rgba(231, 226, 226, 0.5)" }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorites" sx={{color:"white"}}>
            <MoreVert/>
          </IconButton>
        }
        title="Hardeep Mohanty"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="494"
        image="IMG_20230908_102107541-01.jpeg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
        <Checkbox
            sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
          <Share/>
        </IconButton>
        </CardActions>
        </Card>

        <Card sx={{ mt:15, ml:45,mb:10, bgcolor:"rgba(22, 30, 40, 0.581)",color:"white", boxShadow:" 0px 2px 4px 2px rgba(231, 226, 226, 0.5)" }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorites" sx={{color:"white"}}>
            <MoreVert/>
          </IconButton>
        }
        title="Swapnita Singh"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="494"
        image="DSC_6692.JPG"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
        <Checkbox
            sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
          <Share/>
        </IconButton>
        </CardActions>
        </Card>

        <Card sx={{ mt:15, ml:45,mb:10, bgcolor:"rgba(22, 30, 40, 0.581)",color:"white", boxShadow:" 0px 2px 4px 2px rgba(231, 226, 226, 0.5)" }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            K
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorites" sx={{color:"white"}}>
            <MoreVert/>
          </IconButton>
        }
        title="Kaushik Kumar Dash"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="494"
        image="IMG_20230307_153952_833.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
        <Checkbox
            sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
          <Share/>
        </IconButton>
        </CardActions>
        </Card>

        <Card sx={{ mt:15, ml:45,mb:10, bgcolor:"rgba(22, 30, 40, 0.581)",color:"white", boxShadow:" 0px 2px 4px 2px rgba(231, 226, 226, 0.5)" }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorites" sx={{color:"white"}}>
            <MoreVert/>
          </IconButton>
        }
        title="Anshuman Panda"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="494"
        image="VSSUT.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
        <Checkbox
            sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
          <Share/>
        </IconButton>
        </CardActions>
        </Card>

        <Card sx={{ mt:15, ml:45, mb:10, bgcolor:"rgba(22, 30, 40, 0.581)",color:"white", boxShadow:" 0px 2px 4px 2px rgba(231, 226, 226, 0.5)" }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            SM
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorites" sx={{color:"white"}}>
            <MoreVert/>
          </IconButton>
        }
        title="Soumyajit Mullik"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="494"
        image="DSC_7058.JPG"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
        <Checkbox
            sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="add to favorites" sx={{color:"white"}}>
          <Share/>
        </IconButton>
        </CardActions>
        </Card>
     </Box>
  )
}
