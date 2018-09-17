import React from 'react';
import styled from 'styled-components';

import {DataType, withDataContext} from 'appContext';

import TextScrambler from 'components/commons/TextScrambler';

const Container = styled.div`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const Text = styled.h3`
    color: ${props => props.theme.secondary.main};
`;

const TextPrimary = Text.extend`
	font-size: 6rem;
	font-weight: 400;
	letter-spacing: 1rem;
`;
const TextPrimarySub = Text.extend`
	font-size: 3rem;
	font-weight: 700;
`;

const Header = ({primaryHeader, subHeader}) => (
    <Container>
        <TextPrimary>
            <TextScrambler delay={100} text={primaryHeader}/>
        </TextPrimary>
        <TextPrimarySub>
            <TextScrambler delay={2000} text={subHeader}/>
        </TextPrimarySub>
    </Container>
);

export default withDataContext(Header, DataType.LandingPage);