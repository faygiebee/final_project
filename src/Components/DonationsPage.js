import DonationsForm from "./DonationsForm";
import DonationsHistory from "./DonationsHistory";

function DonationsPage(props) {
  return (
    <>
      <DonationsHistory
        history={props.donationHistory}
        title={"Donations History"}
        title1={"Donations"}
        title2={"Category"}
      ></DonationsHistory>
      <DonationsForm></DonationsForm>
    </>
  );
}
export default DonationsPage;
