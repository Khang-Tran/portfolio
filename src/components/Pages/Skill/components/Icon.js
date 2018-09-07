import React from 'react';
import styled from "styled-components";

const Icon = styled.svg`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SkillIcon = ({iconName}) => (
    <Icon>
        <use xlinkHref={`${process.env.PUBLIC_URL}/assets/sprite.svg#icon-${iconName}`}/>
    </Icon>
);

export default SkillIcon;