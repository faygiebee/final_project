import DonationsHistory from "./DonationsHistory";
import Form from "./Form";
import "./IncomePage.css";
import { useState } from "react";
import EditForm from "./EditForm";

function IncomePage(props) {
  const [Edit, UpdateEdit] = useState(false);
  const [obj,UpdateObj]= useState();

  function updateObj(obj){
    UpdateObj(obj);
  }
  function updateEdit(value) {
    UpdateEdit(value);
  }
  return (
    <div className=" bottom-container flexIncomePage">
      <div className="leftSide">
        <DonationsHistory
          history={props.incomeHistory}
          title={"Income History"}
          title1={"Company"}
          title2={"Exempt from Ma'aser"}
          page={props.page}
          deleteDonation={props.deleteDonation}
          object={updateObj}
          Edit={updateEdit}
        ></DonationsHistory>
      </div>
      {Edit == false ? (
          <Form page={props.page} income={props.income}></Form>
        ) : (
          <EditForm
          page={props.page}
          Object={obj}
            DeleteDonation={props.DeleteDonation}
            income={props.income}
          ></EditForm>
        )}
    </div>
  );
}
export default IncomePage;
