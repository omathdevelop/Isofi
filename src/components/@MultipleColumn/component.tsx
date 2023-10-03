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
       return <MultipleColumnView key={_id}>
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