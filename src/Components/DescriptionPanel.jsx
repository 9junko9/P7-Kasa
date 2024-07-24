import "../Components/DescriptionPanel.scss";

export function DescriptionPanel() {
  return (
    <div className="description__panel">
      <p className="description_header">
        <span>Description </span>
        <i className="fa-solid fa-chevron-up"></i>
      </p>
      <p className="description_content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        nesciunt commodi vero architecto asperiores possimus dolores tempora
        odio nam deleniti doloremque nemo veritatis ut, eaque ab, nisi quae
        dolor ea. Temporibus provident aspernatur deleniti ipsa animi, rem
        officia libero quam, voluptatem molestias architecto unde perspiciatis
        iure, pariatur voluptatum sed exercitationem.
      </p>
    </div>
  );
}
