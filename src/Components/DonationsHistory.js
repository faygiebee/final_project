import './DonationsHistory.css';
import Card from './Card';
import SubTitle from './SubTitle';
import DonationsHistoryList from './DonationsHistoryList';
import Button from './Button';


function DonationsHistory(){
    return (
    <div className=" box transaction-box">
    <SubTitle></SubTitle>
    <DonationsHistoryList></DonationsHistoryList>
    <div class="footer-container ">
    <Button></Button>
    </div>
  </div>);
}


export default DonationsHistory;