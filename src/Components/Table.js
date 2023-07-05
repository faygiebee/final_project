import "./Table.css";
import TableTitleRow from "./TableTitleRow";
import TableRow from "./TableRow";

function Table(props) {
  const newArr = [...props.history];

  return (
    <table className="transaction-history">
      <TableTitleRow
        title1={props.title1}
        title2={props.title2}
      ></TableTitleRow>
      {newArr.map(function (item) {
        return (
          <TableRow
            Edit={props.Edit}
            deleteDonation={props.deleteDonation}
            DeleteDonation={props.DeleteDonation}
            object={item}
            page={props.page}
            Object={props.object}
          ></TableRow>
        );
      })}
    </table>
  );
}

export default Table;
