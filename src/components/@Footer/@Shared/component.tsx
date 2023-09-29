import {motion} from 'framer-motion';
import { AnyView, BreakView, TextView } from "../../../design/@AppView/component"
const Content = () => (
    <>
    <AnyView className={'content'}>
        <TextView>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Earum soluta officia et, suscipit necessitatibus minus iste illo <BreakView/> voluptatibus voluptate aut reiciendis vel deleniti numquam aliquam ex esse enim debitis commodi.</TextView>
    </AnyView>
    </>
);

const Email = () => {
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.33333 5.83341L8.49999 9.70841C9.38889 10.3751 10.6111 10.3751 11.5 9.7084L16.6667 5.83337M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83341C17.5 4.91294 16.7538 4.16675 15.8333 4.16675H4.16667C3.24619 4.16675 2.5 4.91294 2.5 5.83341V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z" stroke="#97A1AF" strokeWidth="1.5" strokeLinecap="round"/>
</motion.svg> 
    )
};

export {Content, Email};