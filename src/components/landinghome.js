import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <div style={{display:'flex'}}>
        <div>
            <Box style={{marginLeft:'100px',marginTop:'100px'}}>
                <Typography variant='h3' style={{fontFamily:'cursive',fontWeight:'bold'}}>Phony APP</Typography>
            </Box>
            <Box style={{width:'900px',marginTop:'100px',marginLeft:'100px'}}>
            <Typography variant='h6' style={{fontFamily:'cursive',fontWeight:'bold'}}>Our Phone Book App is the perfect tool to organize and manage all your 
                contacts in one convenient place. Whether you're a busy professional, a social butterfly,
                 or simply someone who likes to stay connected, 
                 our app is designed to streamline your communication needs.
                 With our user-friendly interface and intuitive design, accessing your contacts has never been easier.
                  Say goodbye to the days of searching through endless lists or struggling to remember important details.
                   Our app allows you to store and retrieve
                  contact information effortlessly, saving you time and ensuring you never miss a beat.</Typography>
                  <Box sx={{  mt: 2, marginLeft:'300px' }}>
                    <LinkedInIcon sx={{ marginRight: 2,color:'black',fontSize:'50px' }}/>
                    <InstagramIcon sx={{ marginRight: 2,color:'black',fontSize:'50px' }}/>
                    <FacebookIcon sx={{ marginRight: 2,color:'black',fontSize:'50px' }}/>
                    <TwitterIcon sx={{ marginRight: 2,color:'black',fontSize:'50px' }}/>
                  </Box>
                 </Box>
        </div>
        <div>
        <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: 'black', height: '100vh' ,marginLeft:'100px',width:'380px'}}>
        <div style={{display:'flex'}}>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{marginTop:'10px'}}>
          <Link to="/signin">
        <Button variant="contained"  color="secondary" style={{marginLeft:'100px',marginTop:'40px',fontSize:'20px'}}>
        Get Started
        <ArrowForwardIcon/>
      </Button></Link>
        </div>
        <div style={{display:'flex',marginTop:'60px'}}>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        <div style={{display:'flex',marginTop:'20px'}}>
        <SettingsPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <SettingsVoiceIcon style={{color:'white',marginLeft:'20px'}}/>
        <WifiTetheringIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneDisabledIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneForwardedIcon style={{color:'white',marginLeft:'20px'}}/>
        <LocalPhoneIcon style={{color:'white',marginLeft:'20px'}}/>
        <BrightnessLowIcon style={{color:'white',marginLeft:'20px'}}/>
        <PhoneIphoneIcon style={{color:'white',marginLeft:'20px'}}/>
        </div>
        </Box>
      </Container>
    </React.Fragment>
    </div>
    </div>
    
  );
}