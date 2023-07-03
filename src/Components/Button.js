import './Button.css';
import './Icon.js';

function Button(props){
    return (<>
<div className='btn btn-white'>
    {props.name}
    </div>
    </>);
}

export default Button;