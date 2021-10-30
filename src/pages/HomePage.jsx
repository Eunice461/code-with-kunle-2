import React from 'react'
import styled from 'styled-components'
import AboutMe from '../components/AboutMe'
import Counter from '../components/Counter'
import Courses from '../components/Courses'
import Landing from '../components/Landing'
import Full from '../components/Full'
import SendUsMessage from '../components/SendUsMessage'
import WhyLearn from '../components/WhyLearn'
import Payment from '../components/Payment'

const HomePage = () => {
    return (
			<Container>
				<Landing />
				<Full />
				<Payment />
				<WhyLearn />
				<AboutMe />
				<Courses />
				<Counter />
				<SendUsMessage />
			</Container>
		);
}

const Container = styled.div``
export default HomePage
