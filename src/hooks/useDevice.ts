/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createBreakpoint, useLocation  } from "react-use";

const useBreakPoint = createBreakpoint({ XL: 1280, L: 768, S: 485 });
const useDevice = () => {

    const breakPoint = useBreakPoint();
    const located = useLocation();
    console.log({ located });
    console.log(located.protocol);
    return {
        deviceBreakPoint:
        {
            isPhone: breakPoint === 'S',
            isTablet: breakPoint === 'L',
            isLaptop: breakPoint === 'XL'
        }
    }
};

export default useDevice;