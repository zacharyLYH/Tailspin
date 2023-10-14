"use client";
import axios from "axios";

export const handleSubmitIncrement = () => {
    axios.post("/api/submit/static", {});
};
