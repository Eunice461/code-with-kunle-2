import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import landing from '../img/landing.jpg'
import { mobile } from '../responsive';
const Landing = () => {
    return (
			<Container>
				<Wrapper>
					<Title>Build Apps. Build A Better Life.</Title>
					<Title2>Proven training so you can learn to code quickly,</Title2>
					<Title2>even with no programming experience.</Title2>
					<Link to='/login'>
						<Button>Start Learning</Button>
					</Link>
				</Wrapper>
			</Container>
		);
}

const Container = styled.section`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.0),
			rgba(255, 255, 255, 0.0)
		),
		url(https://image.freepik.com/free-vector/realistic-composition-consist-modern-models-laptop-smartphone-with-black-glossy-screens_1284-62284.jpg)
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	// padding: 20px;
	color: white;
	${mobile({ width: "75%" })}
`;
const Title = styled.h1`
	font-size: 3rem;
	font-weight: 700;
	margin-top: 50px;
	margin-bottom: 10px;
	align-items: center;
	`
	const Title2 = styled.p`
	text-align: center;
	color: #ccc;
	`
	const Button = styled.button`
		background-color: #1ead2c;
		align-items: center;
		color: white;
		width: 50%;
		height: 10vh;
		padding: 24px 20px;
		margin-top: 50px;
		border-radius: 5px;
		border: none;
		border-radius: 5px;
		font-size: 25px;
		font-weight: 700;
	`;

export default Landing
