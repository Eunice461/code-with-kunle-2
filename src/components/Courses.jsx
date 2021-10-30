import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { courses } from '../utils/constants';
import Course from './Course';

const Courses = () => {
    return (
			<Wrapper>
				<Text>Other Course</Text>
                <div></div>
				<Container>
					{courses.slice(0, 6).map((item) => (
						<Course item={item} key={item.id} />
					))}
					<Link to='/course'>
						<Button>See All Course</Button>
					</Link>
				</Container>
			</Wrapper>
		);
}
const Wrapper = styled.div``
const Container = styled.div`
	width: 70%;
	margin: auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 3rem;
	justify-content: space-between;
	margin-bottom: 100px;
	${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Text = styled.p`
	margin-top: 25px;
	margin-left: 25px;
	font-size: 20px;
	font-weight: 700;
`;
const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: white;
	color: gray;
	cursor: pointer;
	font-size: 25px;
	font-weight: 700;
	margin-left: 30%;
`;
export default Courses
