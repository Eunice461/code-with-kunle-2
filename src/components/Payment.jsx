import React from 'react'
import styled from 'styled-components';

const Payment = () => {
    return (
			<Container>
				<ImageContainer>
					<Image src='https://codewithchris-wpengine.netdna-ssl.com/img/afc/completed-28-day-challenge.png' />
				</ImageContainer>
				<Wrapper>
					<Title>Get Started on your Fullstack Developer Journey!</Title>
					<Course>
						<ListCourse>(</ListCourse>
						<ListCourse>HTML</ListCourse>
						<ListCourse>CSS</ListCourse>
						<ListCourse>Bootstrap</ListCourse>
						<ListCourse>Firebase</ListCourse>
						<ListCourse>Reactjs</ListCourse>
						<ListCourse>Nodejs</ListCourse>
						<ListCourse>Github</ListCourse>
						<ListCourse>)</ListCourse>
					</Course>
					<Price>N100,000</Price>
					<Desc>Best price you can get</Desc>
					<Button>Pay Now!</Button>
				</Wrapper>
			</Container>
		);
}
const Container = styled.div`
	background: #042144;
	width: 100%;
    height: 80vh;
	margin: auto;
	display: flex;
    color: white;
    align-items: center;
    justify-content: center;
`;
const ImageContainer = styled.div`
`
const Image = styled.img`
width: 250px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 15px 30px;
text-align: center;
`
const Title = styled.h3`
font-size:30px;
font-weight: 400;
margin-top: 15px;
`
const Course = styled.div`
display: flex;
justify-centent: center;
gap: 2rem;
margin-left: 40px;
margin-top: 5px;
margin-bottom: 25px;
`
const ListCourse = styled.span`
	
`;
const Price = styled.h1`
font-weight: 700;
font-size: 60px;
`
const Desc = styled.p`
color: white;
`
const Button = styled.button`
	border: none;
	padding: 24px 20px;
	width: 50%;
	background: green;
	color: white;
	border-radius: 5px;
    margin: 15px 15px;
	font-size: 25px;
	font-weight: 700;
`;
export default Payment
