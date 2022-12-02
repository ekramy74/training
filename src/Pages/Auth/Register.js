import {useReducer} from "react";
import {AuthReducer, InitialState} from "./AuthReducer";
import styles from "./Auth.module.css";
import {Button, Form, Input, message, Spin} from "antd";
import {Link, useNavigate} from "react-router-dom";
import * as ImIcons from "react-icons/im";
import * as FiIcons from "react-icons/fi";
import {AuthActionTypes} from "../../utils/ActionTypes/ActionTypes";

const Register = () => {
    const [state, dispatch] = useReducer(AuthReducer, InitialState)
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 7,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };

    const onFinish = (values) => {
        dispatch(
            {
                type: AuthActionTypes.LOGIN,
            }
        )
        /* UsePost('User/Create', '', {
                 username: values?.username,
                 email: values?.email,
                 password: values?.password
             },
             (result) => {
                 message.success('Register successful');
                 dispatch(
                     {
                         type: AuthActionTypes.REGISTER_SUCCESS,
                     }
                 )
                 setTimeout(() => navigate('/login'), 2000)
             }, (error) => {
                 message.error('Register failed');
                 dispatch({type: AuthActionTypes.REGISTER_ERROR})
             }
         );*/

    };
    return (
        <div className={styles.auth_page}>
            {state.isLoading ?
                <div className={'loading'}>
                    <Spin size="large"/>
                </div>
                :
                <div className={styles.container}>
                    <div className={styles.auth_form_container}>
                        <h1>
                            Welcome to our community!
                        </h1>
                        <div className={styles.auth_form}>
                            <Form
                                {...formItemLayout}
                                form={form}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    label="Username"
                                    rules={[
                                        {
                                            min: 3,
                                            message: 'too short!!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
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
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            min: 6,
                                            message: 'Password must be at least 6 characters',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password/>
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
                                        You already have an account?
                                    </p>
                                    <Link to={'/Login'}>
                                        Login!
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
    )
}
export default Register;