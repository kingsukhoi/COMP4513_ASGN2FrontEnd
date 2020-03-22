import React, {useState} from "react";
import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../style/Login.css'
import { navigate } from "gatsby";
// import { Button } from 'react-bulma-components/dist';



const Login = () => {
  const [validLogin, setValidLogin] = useState(true);
  const invalidLogin  = validLogin ? "" : <Alert 
                                        message="Invalid credentials, try again!"
                                        type="error"
                                        banner
                                        className="invalid-login"
                                        />;
  //Note this is not fully complete. I can't really test until log in api is done
  const postData = async (values) => {
    const location = window.location.hostname;
    try {
      const response = await fetch(`https://${location}/api/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      const validUser = await response.json();
      if( validUser ) {
        navigate("/");
      }
      
      //T
      
    } catch(e) {
      console.log(e);
      setValidLogin( false );
    }
  }

  return (
    <div id="login-container">
     
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
      
    </div>
  )
};

export default () => (<Login/>);
