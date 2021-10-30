import React from 'react'
import styled from 'styled-components';

const Full = () => {
    return (
			<Container>
				<Wrapper>
				<Title>Learn fullstack development with Kunle Michael Akintola</Title>
				<Desc>
					Live online fullstack development training.Enjoy one on one learning
					experience.
				</Desc>
				</Wrapper>
				<Wrapper>
				<Desc>Send us a message today</Desc>

				<a href='http://api.WhatsApp.com/send?phone=+2347068790872'>
					<Button type='submit' data-wow-delay='0.8s'>
						Send via WhatsApp <span class='fa fa-whatsapp'></span>{" "}
					</Button>
				</a>
				</Wrapper>
			</Container>
		);
}
const Container = styled.div`
	border: 1px solid #fff;
	width: 100%;
	height: 50vh;
	margin: auto;
	margin-top: 50px;
	margin-bottom: 50px;
`;
const Wrapper = styled.div`
	text-align: center;
`;
const Title = styled.h3`
`
const Desc = styled.p`
font-size: 20px;
font-weight: 300;
`
const Button = styled.button`
	border: none;
	padding: 24px 20px;
	width: 30%;
	background: green;
	color: white;
	border-radius: 5px;
	font-size: 25px;
	font-weight: 700;
`;
export default Full
