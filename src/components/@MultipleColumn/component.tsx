import { useSelector } from "react-redux";
import { onMultipleColumnSelector } from "../../context/@redux/@selector/selector";
import { MultipleColumnView } from "../../design/@MultipleColumnView/component";
import { ColumnOne, ColumnTwo } from "./@Shared/component";
import type { MultipleColumnDataState } from "../../data/Types";
const MultipleColumn = () => { 
const multipleColumnData = useSelector(onMultipleColumnSelector);

return (<>
   {multipleColumnData.map((state:MultipleColumnDataState<string>) => {
       const {
              _id,
              firstColumnOneText,
               firstColumnTwoText, 
               firstColumnImageOne,
               firstColumnImageTwo,
               secondColumnOneText,
               secondColumnTwoText,
               secondColumnImageOne,
               secondColumnImageTwo
              } = state;
       return <MultipleColumnView 
       initial={{opacity: 0, x: 200}}
       whileInView={{opacity:1, x:[0, 40, 0, 40, 0]}}
       transition={{duration:0.80, delay:0.40}}
        key={_id}>
       <ColumnOne 
       firstColumnOneText={firstColumnOneText} 
       firstColumnTwoText={firstColumnTwoText}
       firstColumnImageOne={firstColumnImageOne}
       firstColumnImageTwo={firstColumnImageTwo}
        />
       <ColumnTwo  
       secondColumnOneText={secondColumnOneText} 
       secondColumnTwoText={secondColumnTwoText}
       secondColumnImageOne={secondColumnImageTwo}
       secondColumnImageTwo={secondColumnImageOne} 
       />
</MultipleColumnView>
   })}

</>
)};

export default MultipleColumn;