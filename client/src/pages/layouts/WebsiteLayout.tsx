import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button, Form } from 'antd';
import '../../index.css'
import ProductManagementPage from '../Product'

const WebsiteLayout = () => {
  return (
    <div>
        <div className="actions">
          <div className='login'>
            <a href=""><button><Link to={'/signup'}>Signup</Link></button></a>
          </div>
          <div className='logup'>
            <a href=""><button><Link to={'/signin'}>Signin</Link></button></a>
          </div>
        </div>

        <div className="banner">
          <img src="https://picsum.photos/1870/550" alt="" />
        </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <p style={{ textAlign: 'center' }}>Nguyễn Duy Thuận </p>
      </footer>
    </div>
  );
};

export default WebsiteLayout;
