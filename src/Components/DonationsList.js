import "./DonationsList.css";
import DonationsListItem from "./DonationsListItem";

function DonationsList(props) {
  console.log(props.donations);
  return (
    <>
      {props.donations.map(function (donation) {
        return (
          <DonationsListItem
            charity={donation.charity}
            amount={donation.amount}
          ></DonationsListItem>
        );
      })}
    </>
  );
}

export default DonationsList;
