/* validationType is a variable created to trigger which conditional is returned to validate authorization to a section of the website.
    Currently, it doesn't do anything, however it allows for more scalability if there are multiple different validations neccecary to authorize a user. */

export default function validateUser(
    validationType: string,
    email?: string,
    check?: boolean,
    challenge?: string,
    progress?: number
) {
    validationType = validationType.toLowerCase();

    if (validationType === "code") {
        return (
            email === "" ||
            check === false ||
            progress !== (99 || 100) ||
            challenge === ""
        );
    } else {
        throw new Error("Invalid Validation Type");
    }
}
