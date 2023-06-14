import "./SubTitle.css";

function SubTitle(props) {
  return (
    <div class="header-container">
      <h3 class="section-header">{props.title}</h3>
    </div>
  );
}

export default SubTitle;
