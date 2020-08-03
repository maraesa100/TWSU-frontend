import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export const MenuBar: React.FC = ({}) => (
  <Navbar className='color-nav justify-content-between'>
    {/* <Navbar.Brand href='#home'>TWSU</Navbar.Brand> */}

    <img
      src={require('../ui/twsu-icon-1.png')}
      width='30'
      height='30'
      className='d-inline-block align-top'
      alt='React Bootstrap logo'
    />
    <Navbar.Toggle aria-controls='basic-navbar-nav' />

    <Navbar.Brand href='#home'>
      <img
        alt=''
        src='/logo.svg'
        width='30'
        height='30'
        className='d-inline-block align-top'
      />
      ROCKET LAUNCHER
    </Navbar.Brand>

    <Navbar.Brand href='#home'>Help</Navbar.Brand>
  </Navbar>
)

export default MenuBar
