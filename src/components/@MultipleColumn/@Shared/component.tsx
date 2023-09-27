import ImageColumnOne from '../../../assets/texture.png';
import ImageColumnTwo from '../../../assets/temp.png';
import { AnyView, TextView, SpanView, BreakView } from '../../../design/@AppView/component';
import { ColumnView, ColumnOneImage, ColumnTwoImage } from '../../../design/@MultipleColumnView/component';
const ColumnOne = ({isMedium, isLarge}:{isMedium:boolean, isLarge:boolean}) => {
    return (
        <>
        {isMedium  && (<ColumnView isTablet={isLarge}>
            <ColumnOneImage src={ImageColumnOne}/>
         <ColumnTwoImage src={ImageColumnTwo}/>
               {isLarge? (
                <AnyView className={'texture-one'}> 
            <TextView>
                Remote and in-person <BreakView/> sessions <BreakView/> 
                support hybrid and <BreakView/> flexible working <BreakView/> patterns 
             </TextView>
             <TextView><SpanView options={'content'}> with a fully 
               HIPPA/HCPC <BreakView/> compliant platform.</SpanView></TextView>
                </AnyView>

               ):(
                <AnyView className={'texture-one'}> 
                <TextView>
                    Remote and in-person sessions <BreakView/> 
                    support hybrid  and flexible working <BreakView/> patterns 
                 </TextView>
                 <TextView><SpanView options={'content'}> with a fully 
                   HIPPA/HCPC compliant <BreakView/> platform.</SpanView></TextView>
                    </AnyView>
               )}
        </ColumnView>)}
         
        </>
    )
};

const ColumnTwo = ({isLarge}:{isLarge:boolean}) => {
    return (
        <>
         <ColumnView isTablet={isLarge}>
         <ColumnTwoImage src={ImageColumnTwo}/>
            <ColumnOneImage src={ImageColumnOne}/>
                <AnyView className={'texture-two'}>
            <TextView>
                Remote and in-person sessions <BreakView/> 
                support hybrid and flexible working patterns 
             </TextView>
             <TextView><SpanView options={'content'}> with a fully 
               HIPPA/HCPC compliant platform.</SpanView></TextView>
                </AnyView>
        </ColumnView>
        </>
    )
};

export {ColumnOne, ColumnTwo};