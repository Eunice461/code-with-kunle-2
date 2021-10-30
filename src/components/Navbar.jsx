import React from "react";
import styled from "styled-components";
import { Search} from "@material-ui/icons";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import Logob from '../img/Logob.png'

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
						<Link to='/'>
							<Image src={Logob} />
						</Link>
				</Left>
				<Center>
					<Logo>
						<ul>
							{links.map((link) => {
								const { id, text, url } = link;
								return (
									<li key={id}>
										<Link to={url}>{text}</Link>
									</li>
								);
							})}
						</ul>
					</Logo>
				</Center>
				<Right>
					<Link to='/register'>
						<MeunItem>REGISTER</MeunItem>
					</Link>
					<Link to='/login'>
						<MeunItem>SIGN IN</MeunItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 5rem;
	color: #000;
	background-color: white;
	position: relative;
	align-items: center;
	justify-content: center;
	${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
	height: 5rem;
	width: 100%;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
`;
const Image = styled.img`
	width: 100%;
	margin-left: 160px;
	align-items: center;
	object-fit: cover;
	margin-top: 15px;
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Logo = styled.h1`
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ fontSize: "24px" })}

	ul{
		display: flex;
		justify-content: center;
		li {
			margin: 0 0.5rem;
		}
		a {
			color: #000;
			font-size: 18px;
			text-transform: capitalize;
			letter-spacing: var(--spacing);
			padding: 0.5rem;
			&:hover {
				border-bottom: 2px solid var(--clr-primary-7);
			}
		}
	}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ justifyContent: "center", flex: 2 })}
`;
const MeunItem = styled.div`
	font-weight: 700;
	letter-spacing: var(--spacing);
	padding: 0.5rem;
	font-size: 18px;
	cursor: pointer;
	margin: 0 0.5rem;
	color: black;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export default Navbar;
