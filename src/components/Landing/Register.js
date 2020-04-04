import React, { useState } from "react";
import { Form, Input, Button, Alert, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../../style/Login.css'
import "../../style/Home.css";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from '../../services/auth'
import { Tabs } from 'antd';


const Register = () => {

  return (
      <div>signup</div>
  )
};

export default () => (<Register />);
