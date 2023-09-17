// import useSessionStore from "@/data-store/session-store";
// import resemble from "resemblejs";

// export const StaticCompare = () => {
//     const { setLikenessScore, userImg, imgPrompt } = useSessionStore.getState(); // Assuming useImageStore returns a setLikenessScore function
//     if (!userImg || !imgPrompt) {
//         throw Error(!userImg ? "Img1 not set" : "Either img2 or both not set");
//     }
//     resemble(userImg)
//         .compareTo(imgPrompt)
//         .outputSettings({
//             largeImageThreshold: 1200,
//         })
//         .onComplete((data) => {
//             console.log(data);
//             if (typeof data.getImageDataUrl === "function") {
//                 setLikenessScore(data.getImageDataUrl());
//             }
//         });
// };
