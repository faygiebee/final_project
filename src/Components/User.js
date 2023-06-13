import DropDown from './DropDown';
import SubTitle from './SubTitle';
import './User.css'
import Icon from './Icon';

function User(){
    return (<div className='user-nav'>
    <div className='user-info'>
    <Icon></Icon>
    <SubTitle className="user-name"></SubTitle>
    <Icon></Icon>
    <span>Log Out</span>
    </div>
    <DropDown></DropDown>
    
    </div>)
}

export default User;