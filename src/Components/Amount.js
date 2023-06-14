import './Amount.css';

function Amount(props){
    return (<>
        <h1 className='price'>{props.amount}<span className='price-currency'>(USD)</span> </h1>
        </>
    );
}

export default Amount;