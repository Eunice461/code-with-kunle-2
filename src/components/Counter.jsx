import React from 'react'
import styled from 'styled-components'

const Counter = () => {
    return (
			<Container>
				<Wrapper>
					<Number>21,000,000+</Number>
					<Title>Views on Youtube</Title>
				</Wrapper>
				<Wrapper>
					<Number>5,000+</Number>
					<Title>Happy Student</Title>
				</Wrapper>
				<Wrapper>
					<Number>5,000+</Number>
					<Title>Followers Learning with Us</Title>
				</Wrapper>
				<Wrapper>
					<Number>5</Number>
					<Title>Years helping people learn how to code</Title>
				</Wrapper>
			</Container>
		);
}
const Container = styled.div`
	width: 80%;
	height: 25vh;
	border: 1px solid #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	margin-top: 50px;
	justify-content: space-between;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 25px;
`;
const Number = styled.p`
font-size: 30px;
font-weight: 500;
`
const Title = styled.p``

export default Counter
