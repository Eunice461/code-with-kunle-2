import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Newsletter = () => {
	return (
		<Container>
			<Title>Subscribe</Title>
			<InputContainer>
				<Input placeholder='your email' />
				<Button>
					<Send />
				</Button>
			</InputContainer>
			<Description>
				Subscribe for information and new letter from us.
			</Description>
		</Container>
	);
};

const Container = styled.div`
	height: 30vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
    margin: 50px 50px;
`;
const Title = styled.h4`
	font-size: 30px;
	margin-bottom: 20px;
`;
const Description = styled.p`
	font-size: 14px;
	font-weight: 100;
	margin-top: 20px;
	${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
	width: 30%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
	${mobile({ width: "80%" })}
`;
const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;
`;
const Button = styled.button`
	flex: 1;
	border: none;
	background-color: #1ead2c;
	color: white;
`;
export default Newsletter;
