import React, { Component } from 'react';
import { Container, CloseWrap, ImgWrap, Left, Right } from './Gallary.styled';
import Button from '../libs/button/Button';
import SectionHeader from '../common/section-header/SectionHeader';
import Close from '../common/icons/Close';
import ResizeArea from '../common/resize-area/ResizeArea';
import ChevronLeft from '../common/icons/ChevronLeft';

const { ipcRenderer } = window.require('electron');

export class Gallary extends Component {

  state = {
    curImg: null,
    curIdx: 0,
    images: [],
  }

  componentWillMount() {
    const args = ipcRenderer.sendSync('gallary:images');
    console.log('gallary mount', args)
    this.setState({ ...args }, () => {
      this.loadImg(0);
    });
    
  }

  loadImg(idx) {
    const { images } = this.state;
    const img = new Image();
    img.onload = () => {
      // console.log(img.width, img.height);
      this.setState({ curImg: img.src });
      // ipcRenderer.send('gallary:resize', {width: img.width + 40, height: img.height + 40});
    }
    img.src = images[0];
  }

  handleClick = () => {
  
  }

  handleClose = () => {
    ipcRenderer.send('gallary:close');
  }

  handleLeftClick = () => {
    let { curIdx, images } = this.state;
    if (curIdx > 0) {
      curIdx--;
    } else {
      curIdx = images.length - 1;
    }

    this.setState({ curIdx });
  }

  handleRightClick = () => {
    let { curIdx, images } = this.state;
    if (curIdx < images.length - 1) {
      curIdx++;
    } else {
      curIdx = 0;
    }

    this.setState({ curIdx });
  }

  render() {
    const { curIdx, images } = this.state;

    return (
      <Container>
        <CloseWrap onClick={this.handleClose}>
          <Close fill="#fff" />
        </CloseWrap>
        <Left onClick={this.handleLeftClick}>
          <ChevronLeft />
        </Left>
        <Right onClick={this.handleRightClick}>
          <ChevronLeft />
        </Right>
          <img src={images[curIdx]} />
        <ResizeArea />
      </Container>
    )
  }
}

export default Gallary;
