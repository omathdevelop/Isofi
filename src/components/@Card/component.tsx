import { CardView } from "../../design/@CardView/component";
import { AnyView, SpanView, TextView, BreakView } from "../../design/@AppView/component";
const Card = () =>{
  return (<>
  
   <CardView>
      <AnyView className={'content'}>
         <AnyView>
         <TextView>Businesses and employees, with new <BreakView/> ways of working and different values,<BreakView/> are putting mental health at the centre of their ethos.
            <BreakView/> New ways of working need a new approach to mental health treatment and wellbeing <BreakView/> <SpanView options={'content'}>Isofi puts music at the centre of everything we do</SpanView>.</TextView>
         </AnyView>
      </AnyView>
   </CardView>
   </>);
}

export default Card;

/* 

<AnyView className={'second-column'}>
            
             </AnyView>
          </AnyView>
*/