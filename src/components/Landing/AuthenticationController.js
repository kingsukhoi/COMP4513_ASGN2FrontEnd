import React, { useState } from "react";
import { Form, Input, Button, Alert, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../../style/Login.css'
import "../../style/Home.css";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from '../../services/auth'
import { Tabs } from 'antd';
import Register from '../Landing/Register';
import Login from '../Landing/Login';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const AuthenticationController = () => {
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
        <div id="login-container" style={divStyle}>

            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Login" key="1">
                    <Login />
                </TabPane>
                <TabPane tab="Signup" key="2">
                    <Register />
                </TabPane>
            </Tabs>


        </div>
    )
};

export default () => (<AuthenticationController />);
