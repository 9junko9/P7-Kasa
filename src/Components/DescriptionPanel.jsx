import "../Components/DescriptionPanel.scss";

export function DescriptionPanel(props) {
  return (
    <div className="description__panel">
      <p className="description_header">
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-up"></i>
      </p>
      <p className="description_content">{props.content}</p>
    </div>
  );
}
