/* This file will be used to store the mapping of all challenges we have available to users, and for future purpose, 
anything extra that may be related to those challenges. */

export const challengeMap = [
    { key: "helloWorld", value: "Hello World" },
    { key: "simpleDialog", value: "Simple Dialog" },
    { key: "simpleNavBar", value: "Simple NavBar" },
    { key: "brightSunnyDay", value: "Bright Sunny Day" },
];

export const challengeEnum = Object.fromEntries(
    challengeMap.map((item) => [item.key, item.key]) //This has to be key to properly
);
