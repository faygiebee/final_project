import BulletPoint from './BulletPoint';
import NumSmall from './NumSmall';
import './TableRow.css';
import Icon from './Icon';

function TableRow(){
    return (
    <tr>
        <td><Icon></Icon>company</td>
        <td>date</td>
        <td><NumSmall></NumSmall></td>
        <td><BulletPoint>Category</BulletPoint></td>
    </tr>)
    ;
}

export default TableRow;