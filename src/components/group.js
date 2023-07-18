import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from './navbar';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const cardsData = [
  {
    id: 1,
    avatarLabel: 'R',
    title: 'Group Name 1',
    note: 'Note 1',
    method: "",
  },
  {
    id: 2,
    avatarLabel: 'K',
    title: 'Group Name 2',
    note: 'Note 2',
    method: "",
  },
  {
    id: 3,
    avatarLabel: 'S',
    title: 'Group Name 3',
    note: 'Note 3',
    method: "",
  },
  {
    id: 4,
    avatarLabel: 'P',
    title: 'Group Name 4',
    note: 'Note 4',
    method: "",
  }
  // Add more card data as needed
];

const CardRow = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export default function GroupPage() {
  return (
    <div>
      <Navbar/>
      <div>
      <Button variant="contained" color="secondary" style={{marginLeft: '1350px',marginBottom: '-40px'}}>Create Group <AddIcon/></Button>
      </div>
    <div className="card-container">
      <CardRow>
        {cardsData.map((card) => (
          <Card key={card.id} sx={{ maxWidth: 345, marginLeft: '30px',marginTop: '100px',backgroundColor: '#1c1a1d',color:'whitesmoke',height:'280px'}}>
            <CardHeader style={{marginBottom:'-20px' }}
              avatar={
                <Avatar sx={{ backgroundColor: '#e007fd' }} aria-label="recipe">
                  {card.avatarLabel}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon  style={{color: 'whitesmoke' }}/>
                </IconButton>
              }
              title={card.title}
            />
            <CardMedia
              height="150"
            >
              <GroupsIcon style={{ fontSize: '150px', marginLeft:'30px',marginBottom:'-30px', color: 'whitesmoke' }}/>
            </CardMedia>
            <CardContent>
              <Typography variant="body2" color="whitesmoke" style={{marginBottom: '-10px' }}>
                {card.note}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <BookmarkIcon style={{color: '#db96e4' }}/>
              </IconButton>
              <IconButton aria-label="share">
                <EditIcon  style={{color: '#db96e4' }}/>
              </IconButton>
              <ExpandMore
                expand={false}
                onClick={() => {}}
                aria-expanded={false}
                aria-label="show more"
              >
                {/* <ExpandMoreIcon /> */}
              </ExpandMore>
            </CardActions>
            <Collapse in={false} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>{card.method}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </CardRow>
    </div>
    </div>
  );
}
