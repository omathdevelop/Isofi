enum BUTTON_TYPE_CLASSES {
    view = 'view',
    therapy = 'therapy',
    playlist = 'playlist',
}

type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
    children: React.ReactNode
    onClick?:React.MouseEventHandler<HTMLButtonElement>

}

export { BUTTON_TYPE_CLASSES };
export type { ButtonProps };


