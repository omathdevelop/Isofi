import ImageColumnOneVariant from '../../../assets/texture.png';
import ImageColumnTwo from '../../../assets/temp.png';
import { AnyView, TextView, SpanView } from '../../../design/@AppView/component';
import { ColumnView, ColumnOneImage, ColumnTwoImage } from '../../../design/@MultipleColumnView/component';
const ColumnOne = () => {
    return (
        <>
         <ColumnView setDevice={'mobile'}>
         <ColumnOneImage src={ImageColumnOneVariant}/>
         <ColumnTwoImage src={ImageColumnTwo}/>
         <AnyView className={'texture-one'}> 
          <TextView>
              <SpanView options={'content'}> 
              Remote and in-person sessions support hybrid and  flexible working  patterns 
                </SpanView>
           </TextView>
           <TextView>with a fully HIPPA/HCPC  compliant platform.</TextView>
              </AnyView>
      </ColumnView>
         
       
        </>
    )
};

const ColumnTwo = () => {
    return (
        <>
         <ColumnView >
         <ColumnTwoImage src={ImageColumnTwo}/>
            <ColumnOneImage src={ImageColumnOneVariant}/>
                <AnyView className={'texture-two'}>
                <TextView>
              <SpanView options={'content'}> 
              Remote and in-person sessions support hybrid and  flexible working  patterns 
                </SpanView>
           </TextView>
           <TextView>with a fully HIPPA/HCPC  compliant platform.</TextView>
                </AnyView>
        </ColumnView>
        </>
    )
};

export {ColumnOne, ColumnTwo};