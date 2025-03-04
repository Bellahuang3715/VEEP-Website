import React from 'react';

import { Container, Button } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/HeaderScreen.css';

import TitleBox from './TitleBox';

class HeaderScreen extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        
      }
    }
    
    render() {
      return (
        <div className="HeaderScreenBox">
            <TitleBox />
            <Container className='row'>
                <Button className="SocialButton col-4" fullwidth="true" variant="light"
                    onClick={() =>(window.location.href = 'https://www.facebook.com/uoftveep')}>
                <FacebookIcon className="IconButton"/>
                </Button>
                <Button className="SocialButton col-4" fullwidth="true" variant="light"
                    onClick={() =>(window.location.href = 'https://instagram.com/uoft_veep?utm_medium=copy_link')}>
                    <InstagramIcon className="IconButton"/>
                </Button>
                <Button className="SocialButton col-4" fullwidth="true" variant="light"
                onClick={() =>(window.location.href = 'mailto:utveep@gmail.com')}> 
                    <MailOutlineIcon className="IconButton"/>
                </Button>
            </Container>
        </div> 
      )
    }
  }
  
export default HeaderScreen;