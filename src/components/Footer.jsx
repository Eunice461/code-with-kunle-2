import React from 'react'
import styled from 'styled-components'
import { Facebook, List, Casino, School, AttachFile, YouTube, Instagram, Twitter } from "@material-ui/icons";

const Footer = () => {
    return (
			<Contain>
				<Container>
					<First>
						<Title>Site</Title>
						<Wrapper>
							<Content>
								<Icon>
									<List />
								</Icon>
								<IconTitle>Tutorial Index</IconTitle>
							</Content>
							<Content>
								<Icon>
									<School />
								</Icon>
								<IconTitle>CWC for Classrooms</IconTitle>
							</Content>
							<Content>
								<Icon>
									<Casino />
								</Icon>
								<IconTitle>Courses</IconTitle>
							</Content>
							<Content>
								<Icon>
									<AttachFile />
								</Icon>
								<IconTitle>Privacy Policy</IconTitle>
							</Content>
							<Content>
								<Icon>
									<AttachFile />
								</Icon>
								<IconTitle>Terms of Service</IconTitle>
							</Content>
						</Wrapper>
					</First>
					<Second>
						<Title>Social</Title>
						<Wrapper>
							<Content>
								<Icon>
									<YouTube />
								</Icon>
								<IconTitle>YouTube</IconTitle>
							</Content>
							<Content>
								<Icon>
									<Twitter />
								</Icon>
								<IconTitle>Twitter</IconTitle>
							</Content>
							<Content>
								<Icon>
									<Instagram />
								</Icon>
								<IconTitle>Instagram</IconTitle>
							</Content>
							<Content>
								<Icon>
									<Facebook />
								</Icon>
								<IconTitle>Facebook</IconTitle>
							</Content>
						</Wrapper>
					</Second>
					<Third>
						<Title>Community</Title>
						<Wrapper>
							<Content>
								<Icon>
									<List />
								</Icon>
								<IconTitle>Tutorial Index</IconTitle>
							</Content>
							<Content>
								<Icon>
									<School />
								</Icon>
								<IconTitle>CWC for Classrooms</IconTitle>
							</Content>
							<Content>
								<Icon>
									<Casino />
								</Icon>
								<IconTitle>Courses</IconTitle>
							</Content>
							<Content>
								<Icon>
									<AttachFile />
								</Icon>
								<IconTitle>Privacy Policy</IconTitle>
							</Content>
							<Content>
								<Icon>
									<AttachFile />
								</Icon>
								<IconTitle>Terms of Service</IconTitle>
							</Content>
						</Wrapper>
					</Third>
					<Fourth>
						<Title>Contact</Title>
						<Wrapper>
							<Content>
								<Icon>
									<List />
								</Icon>
								<IconTitle>About Us</IconTitle>
							</Content>
							<Content>
								<Icon>
									<School />
								</Icon>
								<IconTitle>Contact</IconTitle>
							</Content>
							<Content>
								<Icon>
									<Casino />
								</Icon>
								<IconTitle>Media Kit</IconTitle>
							</Content>
						</Wrapper>
					</Fourth>
				</Container>
				<Date>
					<DateTitle>@2021 CodeWithKunel . Built with GeneratePress</DateTitle>
				</Date>
			</Contain>
		);
}
const Contain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Container = styled.div`
	width: 100%;
    height: 50vh;
	background-color: #051625;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const First = styled.div`
flex: 1;
`
const Second = styled.div`
	flex: 1;
`;
const Third = styled.div`
	flex: 1;
`;
const Fourth = styled.div`
	flex: 1;
`;
const Title = styled.h4`
	margin: 30px 70px;
	font-size: 20px;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const Content = styled.div`
	display: flex;
	align-items: center;
	margin-left: 70px;
`;
const Icon = styled.span`
	
`;
const IconTitle = styled.span`
	margin-left: 10px;
	color: #136dd8; ;
`;
const Date = styled.div`
width:100%;
height: 8vh;
background-color: black;
color: white;
`
const DateTitle = styled.h5`
    font-size: 16px;
    font-weight: 200;
    text-align: center;
    margin-top: 15px;
`;
export default Footer
