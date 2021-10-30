import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const LoginPage = () => {
	return (
		<Container>
            <Title1>Code With Kunle</Title1>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder='username' />
					<Input placeholder='password' />
					<Button>LOGIN</Button>
					<Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
					<Link to="/register">CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
			center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Title1 = styled.h1`
margin-bottom: 60px;`

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #1e35ad;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
	align-items: center;
	justify-content: center;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

export default LoginPage;
