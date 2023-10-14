"use client";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';


const submitIncrement  = () => {
    return axios.post("/api/submit/static")

}


export const useSubmitIncrement = () => {
 

    const handleSubmitIncrement = () => {
        return useMutation({
            mutationFn: async () => {
                console.log("clicked");
                return axios.post("/api/submit/static");
            },
        });

    };

    return { handleSubmitIncrement };
};
