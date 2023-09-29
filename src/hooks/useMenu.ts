import { useDispatch, useSelector } from 'react-redux';
import { setIsMenuOpen } from '../context/@redux/@slices/slice';
import { onIsMenuOpenSelector } from '../context/@redux/@selector/selector';
const useMenu = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(onIsMenuOpenSelector);
    const onMenuOpen = () => dispatch(setIsMenuOpen(!isMenuOpen));
    const onIsMenuOpenState = () => dispatch(setIsMenuOpen(isMenuOpen))
    return {isMenuOpen, onMenuOpen, onIsMenuOpenState};

};


export default useMenu;