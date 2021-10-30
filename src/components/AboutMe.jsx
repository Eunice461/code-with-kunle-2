import React from 'react'
import styled from 'styled-components'
import kunle from '../img/copy.png'

const AboutMe = () => {
    return (
			<Container>
				<Wrapper>
					<ImgContainer>
						{/* <Image src='https://codewithchris-wpengine.netdna-ssl.com/img/chrishomepage.png' /> */}
						{/* <Image src='https://i.ibb.co/DV62CtZ/kunle.jpg' alt='kunle' /> */}
						<Image src={kunle} alt="kunel" />
					</ImgContainer>
					<InfoContainer>
						<Title>Hello, I’m Kunel!</Title>
						<Desc></Desc>Kunle is a certified Oracle Java Associate programmer
						1, Microsoft certified Associate Python programmer, Oracle cloud
						certified autonomous database specialist.
						<Desc>
							After building apps for enterprise clients for years, I found a
							passion for helping non-coders discover a love for programming,
							become professional developers and change their careers. I would
							love to help you reach your goals!
						</Desc>
					</InfoContainer>
				</Wrapper>
			</Container>
		);
}

const Container = styled.div`
	width: 100%;
	height: 60vh;
	background-color: #051625;
	display: flex;
	align-items: center;
`;
const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
`;
const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
	width: 100%;
`;
const Image = styled.img`
	height: 100%;
	width: 40%;
	margin-left: 260px;
	align-items: center;
	object-fit: cover;
`;
const InfoContainer = styled.div`
flex: 1;
color: white;
margin-right: 100px;
`
const Desc = styled.p`
color: white;
line-height: 2.5rem;
font-size: 18px;
`
const Title = styled.h1``

export default AboutMe
