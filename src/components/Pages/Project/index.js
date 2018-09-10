import React from 'react';
import styled from 'styled-components';

import Navigation from '../../commons/Navigation';
import NextPageButton from '../../commons/NextPageButton';
import Heading from 'components/commons/Heading';
import {withDataContext} from "../../../appContext";
import ProjectContainer from "./components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.secondary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.25fr 3fr .75fr;
`;

const Project = ({header}) => (
    <Container>
        <Navigation color='dark' size={5}/>
        <Heading heading={header}/>
        <ProjectContainer/>
        <NextPageButton align='flex-end' color='dark' size={2}/>
    </Container>
);

export const ProjectPage = withDataContext(Project, 'Project');