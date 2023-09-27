import ImageTwo from '../../assets/fingerCross.png.png';
import { HeroView, TextView } from "../../design/@AppView/component";
import {  ColumnImageView } from "../../design/@ImageView/component";

const SingleColumn = () => {
    return (
          <ColumnImageView
          setColumnImageUrl={ImageTwo}
          >
            <HeroView>
              <TextView className={'single-column-text'}>Sample Text</TextView>
              <TextView className={'single-column-text'}>Sample Text</TextView>
              </HeroView>
         </ColumnImageView>
         )
};

export default SingleColumn;