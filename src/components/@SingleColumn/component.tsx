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
          key={_id}  
          setColumnImageUrl={singleColumnImage}
          >
            <HeroView>
              <AnyView className={'single-column-text'}>
              <PortableText value={content[0]}/>
              </AnyView>
              {/* <TextView className={}></TextView> */}
              </HeroView>
         </ColumnImageView>
          })}
          
          
          </>
         )
};

export default SingleColumn;