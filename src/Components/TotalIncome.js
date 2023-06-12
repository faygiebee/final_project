import './TotalIncome.css'


function TotalIncome(){
    return(<Card className ="total-box">
        <IncomeSection className = "total-box__left"></IncomeSection>
        <IncomeSection className = "total-box__right"></IncomeSection>


    </Card>)
}

export default TotalIncome;