import { CardView } from "../../design/@CardView/component";
import { AnyView, SpanView, TextView } from "../../design/@AppView/component";
import { useSelector } from "react-redux";
import { onSecondHeroSelector } from "../../context/@redux/@selector/selector";
import type { SecondHeroDataState } from "../../data/Types";
const Card = () =>{
   const cardData = useSelector(onSecondHeroSelector);
  return (<>
        

   <CardView>
      <AnyView className={'content'}>
          {cardData.map((state:SecondHeroDataState<string>) => {
            const {_id, firstText, secondText, thirdText} = state;
            return <AnyView key={_id}>
         <TextView>{firstText}</TextView>
           <TextView>{secondText}</TextView>
            <TextView><SpanView options={'content'}>{thirdText}</SpanView></TextView>
         </AnyView>
          })}
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