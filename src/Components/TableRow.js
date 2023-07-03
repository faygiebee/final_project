import BulletPoint from "./BulletPoint";
import NumSmall from "./NumSmall";
import "./TableRow.css";
import Icon from "./Icon";
import EditForm from "./EditForm";

function TableRow(props) {

  function EditDonationsHandler(){
    props.Object(props.object);
    props.Edit(true);
    //props.DeleteDonation(props.object.id)
    return <EditForm></EditForm>
  }
  function DeleteDonationsHandler(e){
  props.DeleteDonation(props.object.id)
  }
  function EditIncomeHandler (){
  } 
  function DeleteIncomeHandler (e){
  props.IncomeDonation(props.object.id)
  }

  let page=props.page;
  console.log(page);
  return (
    <tbody>
      <tr>
        <td>
          <Icon></Icon>
          {props.object.company}
        </td>
        <td>{props.object.date}</td>
        <td>
          <NumSmall number={props.object.amount}></NumSmall>
        </td>
        <td className="flex">
         <BulletPoint class={props.object.comment}></BulletPoint>{props.object.comment}
        </td>
              
        {page=="Income" &&<td><button onClick={EditIncomeHandler} className="btn-purple submit-btn">Edit</button><button onClick={DeleteIncomeHandler}className="btn-purple submit-btn">Delete</button></td> }
        { page=="Donations" && <td><button onClick={EditDonationsHandler} className="btn-purple submit-btn">Edit</button><button onClick={DeleteDonationsHandler} className="btn-purple submit-btn">Delete</button></td>}
      </tr>
    </tbody>
  );
}

export default TableRow;
