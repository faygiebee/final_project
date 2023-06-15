import BulletPoint from "./BulletPoint";
import NumSmall from "./NumSmall";
import "./TableRow.css";
import Icon from "./Icon";

function TableRow(props) {
  console.log("in tableRow");
  console.log(props.object);
  // const item = props.item;

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
         <BulletPoint class={props.object.comment}></BulletPoint> 
          {props.object.comment}
        </td>
      </tr>
    </tbody>
  );
}

export default TableRow;
