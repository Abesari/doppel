import React from 'react'
import {Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneycollectOutlined, Bulboutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptosis</Link>
            </Typography.Title>
            {/* <Button className="menu-control-container"></Button> */}
        </div>
            <Menu theme ="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>\
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneycollectOutlined />}>
                    <Link to="/exchanges">exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<Bulboutlined />}>
                    <Link to="/news">news</Link>
                </Menu.Item>
            </Menu>
    </div>
  );
}

export default Navbar;