import './DonationsHistory.css';
import Card from './Card';
import SubTitle from './SubTitle';
import DonationsHistoryList from './DonationsHistoryList';
import Button from './Button';


function DonationsHistory(){
    return (
    <Card className=" transaction-box">
    <SubTitle></SubTitle>
    <DonationsHistoryList></DonationsHistoryList>
    <div class="footer-container ">
    <Button></Button>
    </div>
  </Card>);
}


export default DonationsHistory;