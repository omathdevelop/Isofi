import {PreviewProps} from 'sanity'

const  Preview = (props:PreviewProps) => {
  return (
    <div style={{border: '1px solid green'}}>
      {props.renderDefault(props)}
    </div>
  )
};

export default Preview;