// ./sanity.config.tsx|jsx
import { LayoutProps} from 'sanity'
const  Layout = (props: LayoutProps)=> {
  return (
     <>
        {props.renderDefault(props)}
     </>
  )
};

export default Layout;

