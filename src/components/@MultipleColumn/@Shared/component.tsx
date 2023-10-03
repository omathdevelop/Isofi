import { AnyView, TextView, SpanView } from '../../../design/@AppView/component';
import { ColumnView, ColumnOneImage, ColumnTwoImage } from '../../../design/@MultipleColumnView/component';
import type { MultipleColumnDataState } from '../../../data/Types';
const ColumnOne = ({
    firstColumnOneText, firstColumnTwoText,
    firstColumnImageOne, firstColumnImageTwo
}:Partial<MultipleColumnDataState<string>>) => {
    return (
        <>
         <ColumnView setDevice={'mobile'}>
         <ColumnOneImage src={firstColumnImageOne}/>
         <ColumnTwoImage src={firstColumnImageTwo}/>
         <AnyView className={'texture-one'}> 
          <TextView>
              <SpanView options={'content'}> 
               {firstColumnOneText}
                </SpanView>
           </TextView>
           <TextView>{firstColumnTwoText}</TextView>
              </AnyView>
      </ColumnView>
         
       
        </>
    )
};

const ColumnTwo = ({
    secondColumnOneText, secondColumnTwoText,
    secondColumnImageOne, secondColumnImageTwo
}:Partial<MultipleColumnDataState<string>>) => {
    return (
        <>
         <ColumnView >
         <ColumnTwoImage src={secondColumnImageOne}/>
            <ColumnOneImage src={secondColumnImageTwo}/>
                <AnyView className={'texture-two'}>
                <TextView>
              <SpanView options={'content'}> 
               {secondColumnOneText}
                </SpanView>
           </TextView>
           <TextView>{secondColumnTwoText}</TextView>
                </AnyView>
        </ColumnView>
        </>
    )
};

export {ColumnOne, ColumnTwo};