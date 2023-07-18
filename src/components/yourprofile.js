import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CallIcon from '@mui/icons-material/Call';
import { selectUser } from './Redux/userslice';
import Navbar from './navbar';
import { Grid } from '@mui/material';

const ProfilePage = () => {
  const user=useSelector(selectUser);
  return (
    <div>
      <Navbar/>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ffffff00' }}>
      <Box sx={{ width: '670px',height:'660px' ,backgroundColor: '#403e41', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',marginBottom:'70px' }}>
        <div style={{display:'flex'}}>
        <Typography variant="h4" style={{marginLeft:'220px',color:'whitesmoke'}}>Personal Info</Typography>
        <InfoIcon style={{fontSize:'35px',marginLeft:'10px',marginTop:'3px',color:'whitesmoke'}}/>
        </div>
        <Avatar sx={{ width: 130, height: 130, mb: 2 ,marginLeft:'250px',bgcolor:' #da8ee4',marginTop:'30px',color:'black'}} />
        <Typography variant="h6" component="div" gutterBottom style={{ color: 'whitesmoke',marginLeft:'40px',display:'flex'}}>
          <Typography variant="h7">First Name:</Typography>
          <Typography style={{marginTop:'5px',marginLeft:'10px'}}>Karnam</Typography>
          <Typography variant="h6" style={{marginLeft:'190px',color:' whitesmoke'}}>Last Name:</Typography>
          <Typography style={{marginTop:'5px',marginLeft:'10px'}}>Mukesh</Typography>
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: 'whitesmoke', display: 'flex', alignItems: 'center' ,marginLeft:'40px',marginTop:'30px'}}>
          <EmailIcon sx={{ marginRight: 2 }} />
          karnammukesh504@gmail.com
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: 'whitesmoke', display: 'flex', alignItems: 'center',marginLeft:'40px',marginTop:'30px' }}>
          <CakeIcon sx={{ marginRight: 2 }} />
          10/7/2003
        </Typography>
        <Typography variant="h6" component="div" mt={4} mb={2} style={{ color: 'whitesmoke', display: 'flex', alignItems: 'center' ,marginLeft:'40px',marginTop:'30px'}}>
          <CallIcon sx={{ marginRight: 2,color:'green' }} />
          9998880012
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'whitesmoke' }}>
          Social media
        </Typography>
        
        <Box sx={{  mt: 2 }}>
        <div style={{display:'flex'}}>
          <LinkedInIcon sx={{ marginRight: 2,color:'whitesmoke' }} />
          <Typography style={{color:'white'}}>https://in.linkedin.com/</Typography>
        </div>
        <div style={{display:'flex'}}>
        <InstagramIcon sx={{ marginRight: 2,color:'whitesmoke' }} />
        <Typography style={{color:'white'}}>https://in.linkedin.com/</Typography>
        </div>
        <div style={{display:'flex'}}>
          <TwitterIcon sx={{ marginRight: 2,color:'whitesmoke' }} />
          <Typography style={{color:'white'}}>https://in.linkedin.com/</Typography>
        </div>
        <div style={{display:'flex'}}>
          <FacebookIcon sx={{ marginRight: 2,color:'whitesmoke' }} />
          <Typography style={{color:'white'}}>https://in.linkedin.com/</Typography>
          </div>
        </Box>
      </Box>
    </Box>
    </div>
  );
};

export default ProfilePage;