/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-empty */
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
	const navigate = useNavigate();
	const [image, setImage] = useState("");
	const handleSubmitForm = async (values) => {

		console.log("Registration Successfully", values);

		try {
			const formData = new FormData();
			formData.append("name", values.name);
			formData.append("sirname", values.sirname);
			formData.append("username", values.username);
			formData.append("email", values.email);
			formData.append("password", values.password);
			formData.append("image", image);
			const url = "http://localhost:3000";
			await axios.post(`${url}/api/user/register/`, formData);
			alert("Register is successful!! Go to Login page...");
		}
		catch (err) {
			console.log(err);
		}
		navigate("/login");
	};
	const handleSubmitFormFailed = () => {

	};


	return (
		<div className="register-bg" >
			<img className="purple-bg" src="purpleRegister.png" />
			<img className="group-bg" src="groupbgRegister.png" />
			<div className="register-form" style={{ flexDirection: "column" }}>
				<Form
					style={{
						marginTop: "2.5rem",
					}}
					name="basic"
					labelCol={{
						span: 6,
					}}
					wrapperCol={{
						span: 14,
					}}
					initialValues={{
						remember: true,
					}}
					onFinish={handleSubmitForm}
					onFinishFailed={handleSubmitFormFailed}
				>
					<h1 className="header-text">ลงทะเบียน</h1>
					<p>Firstname :</p>
					<Form.Item
						name="name"
						rules={[
							{
								required: true,
								message: "Please input your name!",
							},
						]}
					>
						<Input placeholder="Enter your name" className="input" />
					</Form.Item>
					<p>Sirname :</p>
					<Form.Item
						name="sirname"
						rules={[
							{
								required: true,
								message: "Please input your sirname!",
							},
						]}
					>
						<Input placeholder="Enter your sirname" className="input" />
					</Form.Item>
					<p>Username :</p>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input placeholder="Enter your username" className="input" />
					</Form.Item>
					<p>Email :</p>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}
					>
						<Input placeholder="Enter your email" className="input" />
					</Form.Item>
					<p>Password :</p>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password placeholder	="Enter your password" className="input" />
					</Form.Item>
					<p>Upload Image : </p>
					<Form.Item
						name="upload_image"
						rules={[
							{
								required: true,
								message: "Please upload your image!",
							},
						]}
					>
						<input type="file" onChange={(e) => setImage(e.target.files[0])} />
					</Form.Item>
					<Form.Item
						wrapperCol={{
							offset: 0,
							span: 16,
						}}
					>
						<Button className="btn-submit" htmlType="submit">
							ลงทะเบียน
						</Button>

					</Form.Item>

				</Form>

			</div>

		</div >
	);

};

export default RegisterForm;