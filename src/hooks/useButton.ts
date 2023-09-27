import { BUTTON_TYPE_CLASSES } from "../constants/button"
import { ButtonView, TherapyButton, PlayListButton } from "../design/@ButtonView/component"
const useButton =  (buttonType = BUTTON_TYPE_CLASSES.view): typeof ButtonView => (
    {
        [BUTTON_TYPE_CLASSES.view]: ButtonView,
        [BUTTON_TYPE_CLASSES.therapy]: TherapyButton,
        [BUTTON_TYPE_CLASSES.playlist]: PlayListButton

    }[buttonType]
);

export default useButton;
