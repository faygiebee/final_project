import DropDown from "./DropDown";
import "./TableTitleRow.css";

function TableTitleRow(props) {
  return (
    <tr>
      <th>{props.title1}</th>
      <th>
        Date <DropDown></DropDown>
      </th>
      <th>
        Amount <DropDown></DropDown>
      </th>

      <th> {props.title2}</th>
    </tr>
  );
}
export default TableTitleRow;
