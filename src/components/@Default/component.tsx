import * as React from 'react';
import useTextAnimate from "../../hooks/useTextAnimate";
import useViewAnimate from '../../hooks/useViewAnimate';
import { TextView } from "../../design/@AppView/component";

const Default = () => {
    const [onTextAnimate] = useTextAnimate({ selector: '.test-text', text_animate_type: '1', duration: 0.5, delay: 0.2, start_delay: 0, repeat: true });
    const {jumpAnimate, isViewAnimate, onViewAnimateEnd} = useViewAnimate({animateType: 'jump', delay: '4', repeat: '4',  prefixes: 'infinite'})
    return (
    <React.Fragment>
            <TextView  style={{ textAlign: 'center' }} onClick={onTextAnimate}>click</TextView>
            <TextView onAnimationEnd={onViewAnimateEnd} className={`test-text ${ isViewAnimate.viewAnimate? '' : jumpAnimate }`} as={'h2'}>Welcome To (Isofi) Root Route</TextView>
        </React.Fragment>
        )
    
};

export default Default;