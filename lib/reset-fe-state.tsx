import useCodeAreaStore from "@/data-store/code-area-store";
import useSessionStore from "@/data-store/session-store";
import { removeItemFromLocalStorage } from "./localStorage";

/*
A custom hook that resets the coding area state. Clears the code from coding area and resets certain settings.
*/
export function useResetFeState() {
    const { reset } = useSessionStore();
    const { reset: codeAreaReset } = useCodeAreaStore();

    return function performReset() {
        reset();
        codeAreaReset();
        removeItemFromLocalStorage("email");
        removeItemFromLocalStorage("code");
        removeItemFromLocalStorage("challenge");
    };
}
