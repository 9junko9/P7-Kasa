import "../Components/DescriptionPanel.scss";
import { useState } from "react";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  const contentClass = `description_content ${
    isContentVisible ? "visible" : "hidden"
  }`;
  const chevronClass = `fas ${
    isContentVisible ? "fa-chevron-up" : "fa-chevron-down"
  }`;

  return (
    <div className="description__panel">
      <p className="description_header" onClick={toggleContentVisibility}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}
