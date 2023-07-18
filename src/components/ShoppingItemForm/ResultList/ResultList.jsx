import classes from "./ResultList.module.css"
import Card from "../../Card/Card";
import ResultItem from "./ResultItem";

function ResultList(props) {
    const list = props.resultList.map(item => <ResultItem key={item.itemId}
                                                          id={item.itemId}
                                                          name={item.itemName}
                                                          category={item.itemCategory}
                                                          price={item.itemPrice}
                                                          closeResultList={props.closeResultList}/>)

    return (
        <div className={classes.container}>
            <Card>
                <ul>
                    {list}
                </ul>
            </Card>
        </div>
    )
}

export default ResultList;