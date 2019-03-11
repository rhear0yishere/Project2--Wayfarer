<<<<<<< HEAD
=======
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu} from 'semantic-ui-react'


//  class Nav extends Component {
  
//   render() {
//     if(this.props.isLoggedIn){
//       return (
      
//         <div className='nav-container'>
//            <Menu className='nav'>
//             <Menu.Item as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
            
//             <Menu.Menu position='right'>
//             <Menu.Item className= "navBackground" as={Link} to='/AllPosts'
//                   name='All Tips'
//               //   active={activeItem === 'SignIn'}
//                 onClick={this.handleItemClick}
//               />
//               <Menu.Item  as={Link} to='/User'
//               className= "navBackground"
//                 name='Profile'
//               //   active={activeItem === 'SignIn'}
//                 onClick={this.handleItemClick}
//               />
               
//               <Menu.Item clas={Link} to='/'
//               className= "navBackground"
//                 name='Log Out'
//               //   active={activeItem === 'SignIn'}
//                 onClick={this.props.loggedOut}
//               />
              
//             </Menu.Menu>
//           </Menu> 
//         </div>
//       )
//     }
//     else{
//       return (
      
//         <div className='nav-container'>
//            <Menu>
//             <Menu.Item as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
            
//             <Menu.Menu position='right'>
//             <Menu.Item className= "navBackground" as={Link} to='/AllPosts'
//                   name='All Tips'
//               //   active={activeItem === 'SignIn'}
//                 onClick={this.handleItemClick}
//               />
//               <Menu.Item
//               className= "navBackground"
//               //   active={activeItem === 'SignIn'}
//                 onClick={this.handleItemClick}
//               > <Link to="/login">Sign In</Link></Menu.Item>
   
//               <Menu.Item as={Link} to='/signup'
              
//                 name='Sign Up'
//               //   active={activeItem === 'SignUp'}
//                 onClick={this.handleItemClick}
//               />


              
//             </Menu.Menu>
//           </Menu> 
//         </div>
//       )
//     }
    
//   }
// }
 
// export default Nav;


>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal,Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import SignupPage from './SignupPage';
import 'semantic-ui-css/semantic.min.css';
import LoginPage from './LoginPage';
import '../index.css'







 class Nav extends Component {
  
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    
  }
<<<<<<< HEAD
  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })
=======
  
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
  
  
  
  

  render() {
<<<<<<< HEAD
    const { open, size } = this.state
=======
    
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
    if(this.props.isLoggedIn){
      return (
      
        <div className='nav-container'>
<<<<<<< HEAD
           <Menu className='nav' width={8} fixed='top'>
            <Menu.Item as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
=======
           <Menu width={8} fixed='top' >
            <Menu.Item  as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
            
            <Menu.Menu position='right'>
              <Menu.Item as={Link} to='/User'
                name='Profile'
              //   active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              />
<<<<<<< HEAD
               
              <Menu.Item as={Link} to='/AllPosts'
=======
                <Menu.Item as={Link} to='/AllPosts'
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
                name='Global'
              //   active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              />
<<<<<<< HEAD
=======
        
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
              <Menu.Item as={Link} to='/'
                name='Log Out'
              //   active={activeItem === 'SignIn'}
                onClick={this.props.loggedOut}
              />
              
            </Menu.Menu>
          </Menu> 
        </div>
      )
    }
    else{
      return (
      
        <div className='nav-container'>
<<<<<<< HEAD
           <Menu className='nav'  fixed='top'>
            <Menu.Item as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
            
            <Menu.Menu position='right'>
              <Menu.Item>
              <Modal size={size} open={open} onClose={this.close} dimmer={{ className: 'my-dimmer' }}  trigger={<Button onClick={this.show('small')}>Small</Button>}>
=======
           <Menu className='nav'  fixed='top' >
            <Menu.Item as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
            
            <Menu.Menu position='right'>

            <Menu.Item as={Link} to='/AllPosts'
                name='Global'
              //   active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              />
              <Menu.Item>
              <Modal  trigger={<Button>Sign In</Button>}>
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
              <Modal.Header></Modal.Header>
              <Modal.Content>
              <LoginPage takeInput={this.props.takeInput} handleLogIn={this.props.handleLogIn} />
              </Modal.Content>
              </Modal>
              </Menu.Item>
                
              <Menu.Item >
              <Modal  trigger={<Button>Sign Up</Button>}>
              <Modal.Header></Modal.Header>
              <Modal.Content>
                <SignupPage takeInput={this.props.takeInput} signUp={this.props.signUp}/>
              </Modal.Content>
              </Modal>
              
              </Menu.Item>
              </Menu.Menu>
            
          </Menu> 
        </div>
      
      
      )
    }
    
  }
}
 
export default Nav;