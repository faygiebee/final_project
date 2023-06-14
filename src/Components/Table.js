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
        return <TableRow object={item}></TableRow>;
      })}
    </table>
  );
}

export default Table;
