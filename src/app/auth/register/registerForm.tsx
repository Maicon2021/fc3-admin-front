'use client';

import React from "react";
import { AuthForm } from "@/app/components/AuthForm";


export default function RegisterForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return <AuthForm formType="register" onSubmit={handleSubmit} />;

}