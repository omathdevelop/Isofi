/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const useInspect = () => {
    document.addEventListener('contextmenu', (e:any) => {
        e.preventDefault();
    }, false)
   
    // document.addEventListener('keydown', (e:any) => {
    //     if(e.ctrlKey || e.keyCode == 123){
    //         e.stopPropagation();
    //         e.preventDefault();
    //     }
    // }, false)
};

export default useInspect;
