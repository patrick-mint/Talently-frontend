/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
import React from "react";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = () => {

	const [form] = Form.useForm();

	const onFinish = async (values) => {
		console.log("Success:", values);

		try {
			const url = "http://localhost:3000";
			const result = await axios.post(`${url}/api/auth/token/`, {
				username: values.username,
				password: values.password,
			});
			localStorage.setItem("token", result.data.token);
		} catch (e) {
			form.setFields([
				{
					name: "username",
					errors: [e.response.data.error],
				},
			]);
		}

	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			name="basic"
			labelCol={{
				span: 7,
			}}
			wrapperCol={{
				span: 14,
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[
					{
						required: true,
						message: "Please input your username!",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{
					offset: 9,
					span: 16,
				}}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 10,
					span: 16,
				}}
			>
				<Button type="primary" htmlType="submit">
					Sign In
				</Button>
			</Form.Item>
			<Form.Item
				wrapperCol={{
					offset: 7,
					span: 16,
				}}
			>
				<Link to="/register">
					Don't have account? Register
				</Link>

			</Form.Item>
		</Form>
	);
};

export default Login;