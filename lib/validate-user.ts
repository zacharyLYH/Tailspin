/* validationType is a variable created to trigger which conditional is returned to validate authorization to a section of the website.
    Currently, it doesn't do anything, however it allows for more scalability if there are multiple different validations neccecary to authorize a user. */

import { maxProgress } from "@/data-store/stepper-store";
import { loadFromLocalStorage } from "./localStorage";

export default function validateUser(
    validationType: string,
    email?: string,
    check?: boolean,
    challenge?: string,
    progress?: number
) {
    validationType = validationType.toLowerCase();

    /*
    Email is only in local storage if you went through the proper initialization steps. If a user refreshes the /code-area, their STATE gets lost, but local storage doesn't. So, if the user refreshes their page, we'll just allow the STATE to get lost, but since this user has email in local storage, we know for a fact this user got to the /code-area via the proper path. 
    */
    if (validationType === "code") {
        const localStorageEmail = loadFromLocalStorage("email");
        if (
            (email === "" ||
                check === false ||
                progress !== maxProgress ||
                challenge === "") &&
            localStorageEmail?.length === 0
        ) {
            return true;
        }
        return false;
    } else {
        throw new Error("Invalid Validation Type");
    }
}
