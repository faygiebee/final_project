import Amount from './Amount';
import './MaaserBalance.css';
import PurpleButton from './PurpleButton';
import SubTitle from './SubTitle';


function MaaserBalance(){
    return (<Card>

        <SubTitle></SubTitle>
        <Amount></Amount>
        <Comment></Comment>
        <div className="button-box"><PurpleButton></PurpleButton></div>
    </Card>)
}


export default MaaserBalance;