import { MultipleColumnView } from "../../design/@MultipleColumnView/component";
import { ColumnOne, ColumnTwo } from "./@Shared/component";
const MultipleColumn = ({isMedium, isLarge}:{isMedium:boolean, isLarge:boolean}) => (<MultipleColumnView>
       <ColumnOne isMedium={isMedium} isLarge={isLarge}/>
       <ColumnTwo isLarge={isLarge}/>
</MultipleColumnView>)

export default MultipleColumn;