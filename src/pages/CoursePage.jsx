import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Course from "../components/Course";
import { mobile } from "../responsive";
import { courses } from "../utils/constants";
const CoursePage = () => {
	return (
		<Container>
			{courses.map((item) => (
				<Course item={item} key={item.id} />
			))}
		</Container>
	);
};
const Container = styled.div`
	width: 70%;
	margin: 50px;
	margin-left: 10rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 15px;
	justify-content: space-between;
	margin-bottom: 100px;
	${mobile({ padding: "0px", flexDirection: "column" })}
`;
export default CoursePage;
