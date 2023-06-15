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
            
            number={donation.number}
          ></DonationsListItem>
        );
      })}
    </>
  );
}

export default DonationsList;
