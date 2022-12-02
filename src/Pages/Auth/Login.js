import {Button, Form, Input, Spin, message} from 'antd';
import styles from './Auth.module.css'
import {Link, useNavigate} from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import * as ImIcons from "react-icons/im";
import {useContext} from "react";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {AuthContext} from "../../App";
import {AuthActionTypes} from "../../utils/ActionTypes/ActionTypes";


const Login = () => {
    const {authState, authDispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const onFinish = (values) => {
        authDispatch(
            {
                type: AuthActionTypes.LOGIN,
            }
        )
        console.log({
            email: values?.email,
            password: values?.password
        })
        /*UsePost('User/sign_in', '', {
                email: values?.email,
                password: values?.password
            },
            (result) => {
                authDispatch(
                    {
                        type: AuthActionTypes.LOGIN_SUCCESS,
                        payload: {
                            token: result?.value,
                        }
                    }
                )
                message.success('Login successful');
                navigate('/')

            }, (error) => {
                message.error('Login failed');
                authDispatch({type: AuthActionTypes.LOGIN_ERROR})
                console.log(error)
            }
        );*/

    }
    return (
        <div className={styles.auth_page}>
            {authState.isLoading ?
                <div className={'loading'}>
                    <Spin size="large"/>
                </div>
                :
                <div className={styles.container}>
                    <div className={styles.auth_form_container}>
                        <h1>
                            Welcome back!
                        </h1>
                        <div className={styles.auth_form}>
                            <Form
                                onFinish={onFinish}
                                layout={"vertical"}
                            >
                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}/>
                                </Form.Item>
                                <Form.Item

                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}/>
                                </Form.Item>
                                <Form.Item
                                    wrapperCol={{
                                        offset: 0,
                                        span: 24,
                                    }}
                                >
                                    <Button style={{width: "100%"}} type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                                <div className={styles.dont_have_account}>
                                    <p>
                                        Don't have an account?
                                    </p>
                                    <Link to={'/Register'}>
                                        Register!
                                    </Link>
                                </div>
                            </Form>
                        </div>
                        <hr/>
                        <div className={styles.contact_us}>
                            <p>
                                Contact us
                            </p>
                            <div className={styles.social_media}>
                                <a className={styles.whatsApp} target={'_blank'} href={'#'}>
                                    <ImIcons.ImWhatsapp/>
                                </a>
                                <a className={styles.linkedIn} target={'_blank'} href={'#'}>
                                    <ImIcons.ImLinkedin/>
                                </a>
                                <a className={styles.facebook} target={'_blank'} href={'#'}>
                                    <FiIcons.FiFacebook/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.loginImg}/>
                </div>}
        </div>
    );
}
export default Login;