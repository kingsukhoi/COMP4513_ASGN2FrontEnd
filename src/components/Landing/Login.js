import React, { useState } from "react";
import { Form, Input, Button, Alert, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../../style/Login.css'
import "../../style/Home.css";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from '../../services/auth'

const Login = () => {
  console.log(isLoggedIn());
  if (isLoggedIn()) {
    navigate("/app/");
  }
  const [validLogin, setValidLogin] = useState(true);
  const invalidLogin = validLogin ? "" : <Alert
    message="Invalid username or password."
    type="error"
    banner
    className="invalid-login"
  />;

  //Send the data from the form to the login handler in auth services
  const postData = (formValues) => {
    handleLogin(formValues)
      .then((loginResult) => {
        setValidLogin(loginResult);
      }).catch(() => {
        console.error('Something went very wrong!');
      });
  }

  const divStyle = {
    "background-color": 'aliceblue',
  };

  return (
      <Card>
        <Form
          name="login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={postData}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username.',
              }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password.',
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
          </Form.Item>
        </Form>
        {invalidLogin}
      </Card>

  )
};

export default () => (<Login />);
