import useCodeAreaStore from "@/data-store/code-area-store";
import useSessionStore from "@/data-store/session-store";

export function useResetFeState() {
    const { reset } = useSessionStore();
    const { reset: codeAreaReset } = useCodeAreaStore();

    return function performReset() {
        reset();
        codeAreaReset();
    };
}
