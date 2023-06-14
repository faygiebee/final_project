import './BulletPoint.css';

function BulletPoint(props){
  console.log("bulletpoint");
  console.log(props.class);
    return (<div className={props.class}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" rx="8"  fill-opacity="0.14"></rect>
    <circle cx="8" cy="8" r="4" ></circle>
  </svg></div>);

  
}

export default BulletPoint;