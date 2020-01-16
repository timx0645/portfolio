import React from "react"
import Wrapper from "../elements/Wrapper"
import Card from '../elements/WrapperFlip'
import Hero from '../components/Hero'
import CurriculumVitae from '../components/CurriculumVitae'
import Footer from '../components/Footer'
import styled, { keyframes } from 'styled-components';
import '../Global/style.css'
import Projekter from '../components/Projekter'
import { fadeIn } from 'react-animations'
import Layout from '../elements/Layout'

//Animations from react animations
const fadeInAnimation = keyframes`${fadeIn}`;

const PageWrapper = styled.div`
  background-color: #eee;
  animation: 1s ease ${fadeInAnimation};
`;

const IndexPage = () => (
  <Layout>
    <PageWrapper>
      <Hero/>
        <Card 
          Front={<Wrapper children={<CurriculumVitae />}/>}
          Back={<Wrapper children={<Projekter />}/>}
        />
      <Footer />
    </PageWrapper>
  </Layout>
)

export default IndexPage
