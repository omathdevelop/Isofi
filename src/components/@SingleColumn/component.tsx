import { useSelector } from 'react-redux';
import { PortableText } from '@portabletext/react';
import { onSingleColumnSelector } from '../../context/@redux/@selector/selector';
import { HeroView, AnyView } from "../../design/@AppView/component";
import {  ColumnImageView } from "../../design/@ImageView/component";
import type { SingleColumnDataState } from '../../data/Types';
const SingleColumn = () => {
  const singleColumnData = useSelector(onSingleColumnSelector);
    return (
          <>
          {singleColumnData.map((state:SingleColumnDataState<string, []>) => {
           const {_id, singleColumnImage, content} = state;
           console.log({content: content})
            return <ColumnImageView
            initial={{opacity: 0, x: 200}}
            whileInView={{opacity:1, x:[0, 40, 0, 40, 0]}}
            transition={{duration:0.80, delay:0.40}}
          key={_id}  
          setColumnImageUrl={singleColumnImage}
          >
            <HeroView>
              <AnyView className={'single-column-text'}>
              <PortableText value={content[0]}/>
              <PortableText value={content[1]}/>
          

              </AnyView>
              {/* <TextView className={}></TextView> */}
              </HeroView>
         </ColumnImageView>
          })}
          
          
          </>
         )
};

export default SingleColumn;