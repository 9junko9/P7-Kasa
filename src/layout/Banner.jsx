import React from "react";
import PropTypes from "prop-types";
import "../layout/Banner.scss";

function Banner({
  imgSrc,
  altText = "Image de bannière",
  children,
  showMask = true,
}) {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <img src={imgSrc} alt={altText} className="bannerImg" />
        {showMask && <div className="mask"></div>}
        {children && <h1>{children}</h1>}
      </div>
    </div>
  );
}

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  children: PropTypes.node,
  showMask: PropTypes.bool,
};

export default Banner;
