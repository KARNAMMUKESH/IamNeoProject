import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from './navbar';
import { Box } from '@mui/material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
            <IconButton
            
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon style={{color:'black'}}/>
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  

export default function ContactPage() {
  const [value, setValue] = React.useState(0);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleTabChange = (event, newTabIndex) => {
      setTabIndex(newTabIndex);
      setValue(newTabIndex);
    };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
        <Navbar/>
        <Box sx={{ marginLeft:"400px",marginTop:"50px" }}>
    <Tabs value={value} onChange={handleTabChange} aria-label="icon tabs example" textColor="secondary"indicatorColor="secondary">
      <Tab icon={<PhoneCallbackIcon style={{ fontSize:"35px",color: "#db96e4",width:"230px"}} />} aria-label="phone" />
      <Tab icon={<PermContactCalendarIcon style={{fontSize:"35px",color: "#db96e4",width:"230px"}}/>} aria-label="favorite" />
      <Tab icon={<ContactEmergencyIcon style={{fontSize:"35px",color: "#db96e4",width:"230px"}}/>} aria-label="person" />
    </Tabs>
    </Box>
    <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
           <Box sx={{ marginLeft:"380px" }}>
           {/* <Typography>The first tab</Typography> */}
           <List sx={{ width: '800px', bgcolor: 'background.paper' }}>
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
       </ListItemAvatar>
       <ListItemText
         primary="Nantha Skcet"
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
               +91 93344735276
             </Typography>
             {" -SKCET, BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008"}
             <CallIcon style={{fontSize:'25px' ,marginLeft:'40px',marginBottom:'-5px',color:'green'}}/>
             <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <div className='dialog' style={{display: 'flex'}}>
        <Avatar sx={{ backgroundColor: 'grey' ,height:'50px',width:'50px'}}>R</Avatar>
        <Typography style={{marginTop:'5px',marginLeft:'20px',fontSize:'30px',fontFamily:'monospace'}}>Nantha Skcet</Typography>
        <EditIcon style={{marginLeft:'230px', color:'black'}}/>
        </div>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom style={{display:'flex'}}>
            <Typography style={{fontSize:'18px',fontFamily:'inherit'}}>Contact No:</Typography>
           <Typography style={{marginTop:'3px',marginLeft:'7px'}}> +91 93344735276</Typography>
          </Typography>
          <Typography gutterBottom style={{display:'flex'}}>
            <Typography style={{fontSize:'18px',fontFamily:'inherit'}}>EmailId:</Typography>
           <Typography style={{marginTop:'3px',marginLeft:'7px'}}>727721euai026@skcet.ac.in</Typography>
          </Typography>
          <Typography gutterBottom style={{display:'flex'}}>
            <Typography style={{fontSize:'18px',fontFamily:'inherit'}}>Address:</Typography>
           <Typography style={{marginTop:'3px',marginLeft:'7px'}}>SKCET, BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008</Typography>
          </Typography>
          <Typography gutterBottom style={{display:'flex'}}>
            <Typography style={{fontSize:'18px',fontFamily:'inherit'}}>Job Title:</Typography>
           <Typography style={{marginTop:'2px',marginLeft:'7px'}}>Student</Typography>
          </Typography>
          <Typography gutterBottom style={{display:'flex'}}>
            <Typography style={{fontSize:'18px',fontFamily:'inherit'}}>College:</Typography>
           <Typography style={{marginTop:'2px',marginLeft:'7px'}}>Sri Krishna College of Engineering and Technology</Typography>
           </Typography>
           <Typography gutterBottom style={{display:'flex'}}>
            <Typography style={{fontSize:'18px',fontFamily:'inherit'}}>Description:</Typography>
           <Typography style={{marginTop:'2px',marginLeft:'7px'}}>Nantha is a 35-year-old man with a warm and friendly demeanor. Standing at an average height, he has a strong and athletic build, indicative of his dedication to maintaining an active lifestyle. His neatly trimmed beard and short</Typography>
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{color:'black'}}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
             <InfoIcon   onClick={handleClickOpen} style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
           </React.Fragment>
         }
       />
     </ListItem>
     <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar sx={{ backgroundColor: 'rgb(47, 241, 112)' }} > K</Avatar>
       </ListItemAvatar>
       <ListItemText
         primary="Summer BBQ"
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
               +91 8341567923
             </Typography>
             {" — Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 641049"}
             <CallIcon style={{fontSize:'25px' ,marginLeft:'70px',marginBottom:'-5px',color:'green'}}/>
             <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
           </React.Fragment>
         }
       />
     </ListItem>
     <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar sx={{ backgroundColor: 'rgb(241, 47, 112)' }}>S</Avatar>
       </ListItemAvatar>
       <ListItemText
         primary="Sandra Adams"
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
               +91 8746323890
             </Typography>
             {'  — Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 64104'}
             <CallIcon style={{fontSize:'25px' ,marginLeft:'80px',marginBottom:'-5px',color:'green'}}/>
             <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
           </React.Fragment>
         }
       />
       </ListItem>
     <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar sx={{ backgroundColor: 'red' }} > JK</Avatar>
       </ListItemAvatar>
       <ListItemText
         primary="JK"
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
               +91 8341567923
             </Typography>
             {" — Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 641049"}
             <CallIcon style={{fontSize:'25px' ,marginLeft:'70px',marginBottom:'-5px',color:'green'}}/>
             <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
           </React.Fragment>
         }
       />
       </ListItem>
     <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar sx={{ backgroundColor: 'green' }} >S</Avatar>
       </ListItemAvatar>
       <ListItemText
         primary="CEO Nantha"
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
               +91 8341567923
             </Typography>
             {" — Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 641049"}
             <CallIcon style={{fontSize:'25px' ,marginLeft:'70px',marginBottom:'-5px',color:'green'}}/>
             <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
           </React.Fragment>
         }
       />
       </ListItem>
     <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar sx={{ backgroundColor: 'blue' }} > N</Avatar>
       </ListItemAvatar>
       <ListItemText
         primary="Sherly"
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
               +91 8341567923
             </Typography>
             {" — Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 641049"}
             <CallIcon style={{fontSize:'25px' ,marginLeft:'70px',marginBottom:'-5px',color:'green'}}/>
             <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
           </React.Fragment>
         }
       />
     </ListItem>
   </List>
         </Box>
        )}
        {tabIndex === 1 && (
          <Box sx={{ marginLeft:"380px" }}>
          {/* <Typography>The first tab</Typography> */}
          <List sx={{ width: '800px', bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Nantha Skcet"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              +91 93344735276
            </Typography>
            {" -SKCET, BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008"}
            <CallIcon style={{fontSize:'25px' ,marginLeft:'40px',marginBottom:'-5px',color:'green'}}/>
            <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: 'rgb(47, 241, 112)' }} > K</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Summer BBQ"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              +91 8341567923
            </Typography>
            {" — Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 641049"}
            <CallIcon style={{fontSize:'25px' ,marginLeft:'70px',marginBottom:'-5px',color:'green'}}/>
            <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: 'rgb(241, 47, 112)' }}>S</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Sandra Adams"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              +91 8746323890
            </Typography>
            {'  — Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 64104'}
            <CallIcon style={{fontSize:'25px' ,marginLeft:'80px',marginBottom:'-5px',color:'green'}}/>
            <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
          </React.Fragment>
        }
      />
    </ListItem>
  </List>
        </Box>
        )}
        {tabIndex === 2 && (
          <Box sx={{ marginLeft:"380px" }}>
          {/* <Typography>The first tab</Typography> */}
          <List sx={{ width: '800px', bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Nantha Skcet"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              +91 93344735276
            </Typography>
            {" -SKCET, BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008"}
            <CallIcon style={{fontSize:'25px' ,marginLeft:'40px',marginBottom:'-5px',color:'green'}}/>
            <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: 'rgb(47, 241, 112)' }} > K</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Summer BBQ"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              +91 8341567923
            </Typography>
            {" — Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 641049"}
            <CallIcon style={{fontSize:'25px' ,marginLeft:'70px',marginBottom:'-5px',color:'green'}}/>
            <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: 'rgb(241, 47, 112)' }}>S</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Sandra Adams"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              +91 8746323890
            </Typography>
            {'  — Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 64104'}
            <CallIcon style={{fontSize:'25px' ,marginLeft:'80px',marginBottom:'-5px',color:'green'}}/>
            <InfoIcon style={{fontSize:'25px' ,marginLeft:'20px',marginBottom:'-5px',color:'black'}}/>
          </React.Fragment>
        }
      />
    </ListItem>
  </List>
        </Box>
        )}
      </Box>
    </Box>
  );
}
