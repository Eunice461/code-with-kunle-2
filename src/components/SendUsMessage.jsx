import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SendUsMessage = () => {
    return (
			<Container>
				<Wrapper>
					<Title>Contact Us</Title>
					<Desc>Send us a message today</Desc>

					<a href='http://api.WhatsApp.com/send?phone=+2347068790872'>
						<Button
							type='submit'
							data-wow-delay='0.8s'>
							Send via WhatsApp <span class='fa fa-whatsapp'></span>{" "}
						</Button>
					</a>
				</Wrapper>
			</Container>
		);
}
const Container = styled.div`
	width: 100vw;
	height: 60vh;
	background: url("https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg")
		center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    margin-top: 50px;
`;
const Wrapper = styled.div`
	width: 100%;
	height: 80vh;
	padding: 12px;
	background-color: rgba(0, 0, 0, 0.8);
	align-items: center;
	justify-content: center;
`;
const ImgContainer = styled.div``
const Image = styled.img``
const Info = styled.div``
const Title = styled.h1`
	color: white;
	text-align:center;
	margin-top: 100px;
`
const Desc = styled.p`
	color: white;
	font-size: 20px;
	font-weight: 700;
	text-align: center;
`;
const Button = styled.button`
	margin-top: 15px;
	padding: 16px 18px;
	border: none;
	width: 30%;
	height: 5rem;
	background: green;
	color: #fff;
	font-size: 20px;
	font-weight: 700;
	margin-left:35%;
`;
export default SendUsMessage
