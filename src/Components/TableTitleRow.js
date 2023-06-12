import DropDown from './DropDown';
import './TableTitleRow.css';



function TableTitleRow() {
    return (
        <tr>
            <th>{Donations}</th>
            <th>
                Date
                <DropDown></DropDown>
            </th><th>
                Amount
                <DropDown></DropDown>
            </th>

            <th>{Category}</th>
        </tr>
    );


}
export default TableTitleRow;