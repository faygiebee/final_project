import Form from "./Form";
import DonationsHistory from "./DonationsHistory";
import { useRef, useState } from "react";
import EditForm from "./EditForm";

function DonationsPage(props) {
  const [Edit, UpdateEdit] = useState(false);
  const [obj,UpdateObj]= useState();

  function updateObj(obj){
    UpdateObj(obj);
  }
  function updateEdit(value) {
    UpdateEdit(value);
  }

  return (
    <>
      <div className=" bottom-container flexIncomePage">
        <div className="leftSide">
          <DonationsHistory
            history={props.donationHistory}
            title={"Donations History"}
            title1={"Donations"}
            title2={"Category"}
            page={props.page}
            DeleteDonation={props.DeleteDonation}
            Edit={updateEdit}
            object={updateObj}
          ></DonationsHistory>
        </div>
        {Edit == false ? (
          <Form page={props.page} donation={props.donation}></Form>
        ) : (
          <EditForm
          page={props.page}
          Object={obj}
            DeleteDonation={props.DeleteDonation}
            donation={props.donation}
          ></EditForm>
        )}
      </div>
    </>
  );
}
export default DonationsPage;
