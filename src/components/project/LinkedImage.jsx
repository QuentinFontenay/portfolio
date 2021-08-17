import React from "react";

import {
  LinkedImageHorizontalLine,
  LinkedImageLink,
  LinkedImageTitle,
  LinkedImageOverlay
} from "./LinkedImageStyles";

const LinkedImage = ({ url, overlayText, maxWidth, children }) => {
  return (
    <LinkedImageLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={overlayText}
      maxWidth={maxWidth}
    >
      <LinkedImageOverlay>
        <LinkedImageHorizontalLine />
        <LinkedImageTitle>{overlayText}</LinkedImageTitle>
        <LinkedImageHorizontalLine />
      </LinkedImageOverlay>
      {children}
    </LinkedImageLink>
  );
};

export default LinkedImage;