import React, { Component } from 'react';
import { Container } from './Button.styled';

export default ({ children, theme, ...props }) => {
  
  return (
    <Container className={theme} {...props}>
      {children}
    </Container>
  )
}
