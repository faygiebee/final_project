import Amount from './Amount';
import './MaaserBalance.css';
import PurpleButton from './PurpleButton';
import SubTitle from './SubTitle';
import Comment from './Comment';
import Card from './Card';

function MaaserBalance(){
    return (<div className='box'>

        <SubTitle></SubTitle>
        <Amount></Amount>
        <Comment></Comment>
        <div className="button-box"><PurpleButton></PurpleButton></div>
    </div>)
}


export default MaaserBalance;