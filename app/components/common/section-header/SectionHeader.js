import React from "react";
import { Container } from "./SectionHeader.styled";

function SectionHeader(props) {
  const { darkTitle, hasBorder, callback, link, more, target, title } = props;
  const more_flag = more !== undefined;
  return (
    <Container>
      {hasBorder && (
        <span className={darkTitle ? "dark text" : "text"}>{title}</span>
      )}
      {!hasBorder && <span className="title">{title}</span>}
      {more_flag && link && (
        <a className="more" target={target}>
          {more}
        </a>
      )}
      {more_flag && callback && (
        <a className="more" target={target}>
          {more}
        </a>
      )}
    </Container>
  );
}

export default SectionHeader;