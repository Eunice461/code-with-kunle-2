import React from 'react'
import styled from 'styled-components'

const WhyLearn = () => {
    return (
			<Container>
				<Wrapper>
					<Title>Why it’s so hard to learn to code:</Title>
					<Desc>
						Too often, I see instructors that use too much jargon, pacing that
						is unfit for beginners or training that is plain boring.
					</Desc>
					<Desc>
						This results in students feeling guilty, blaming themselves or
						worse, quitting.
					</Desc>
					<Title>There’s a better way at CodeWithKunel…</Title>
					<Desc>
						You’ll save time and effort because our focus is helping beginners
						get over the hump with solid fundamentals.
					</Desc>
					<Desc>
						You’ll look forward to learning because you’ll be making progress
						and feeling motivated.
					</Desc>
					<Desc>
						Most importantly, you’ll be amazed at what you’ll be building in
						just a few weeks!
					</Desc>
				</Wrapper>
			</Container>
		);
}
const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	font-weight: 500;
`;
const Wrapper = styled.div`
    width: 90%;
    height: 80vh;
    padding: 12px;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 15px;
`;
const Title = styled.h3`
	text-align: center;
    margin-top: 15px;
`;
const Desc = styled.p`
margin-top: 35px;`
export default WhyLearn
