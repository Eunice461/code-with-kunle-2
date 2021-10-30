import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Course = ({item}) => {
    return (
				<Container>
                    <Wrapper>
					<Image src={item.image} />
					<Info>
						<Title>{item.text}</Title>
						<Desc>{item.desc}</Desc>
					</Info>
                    </Wrapper>
                    
				</Container>
		);
}
const Container = styled.div`
    margin-top: 15px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h4`
	color: black;
	font-size: 17px;

`;
const Wrapper = styled.div`
	width: 100%;
	height: 60vh;
	background-color: white;
	border-radius: 5px;

	&:hover${Title} {
		color: red;
	}
	&:hover {
		border: 1px solid #ccc;
	}
`;
const Info = styled.div`
	margin-top: 10px;
`;
const Image = styled.img`
	border-radius: 5px;
	height: 200px;
	object-fit: cover;
	${mobile({ height: "30vh" })}
`;
const Desc = styled.p`
color: black;
font-size: 14px;
`
export default Course
