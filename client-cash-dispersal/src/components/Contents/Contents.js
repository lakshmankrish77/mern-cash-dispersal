import React from 'react';
import { MainContainer } from './Contents.elements';

export default function Contents(props) {

  return <MainContainer active={props.toggle}></MainContainer>;
}
