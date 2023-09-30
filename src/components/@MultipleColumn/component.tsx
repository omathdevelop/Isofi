import { MultipleColumnView } from "../../design/@MultipleColumnView/component";
import { ColumnOne, ColumnTwo } from "./@Shared/component";
const MultipleColumn = () => (
<MultipleColumnView>
       <ColumnOne />
       <ColumnTwo />
</MultipleColumnView>
);

export default MultipleColumn;