import {useState} from 'react';
import { useTimeout } from 'ahooks';

const useLoading = () => {
    const [loading, setLoading] = useState<boolean>(false);
    useTimeout(() => setLoading(true), 4000);

    return {isLoaded:loading};
};

export default useLoading;