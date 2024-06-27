"use client";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function page() {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-light_bg dark:bg-dark_bg">
            <div
                id="login-page"
                className="m-auto gap-y-8 flex flex-col w-[90%] max-w-md h-full items-center justify-center bg-light_bg dark:bg-dark_bg"
            >
                <p className="text-[2rem] text-light_text_black dark:text-dark_text_white">
                    Login
                </p>
                <div className="flex flex-col items-end gap-y-8 w-full">
                    <span className="w-full flex flex-col gap-y-4">
                        <Label
                            htmlFor="email"
                            className="text-light_text_black dark:text-dark_text_white"
                        >
                            Enter email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="e.g. name@example.com"
                            type="email"
                            className="text-light_text_black dark:text-dark_text_white border-light_text_black dark:border-dark_text_white bg-transparent"
                        ></Input>
                    </span>
                    <span className="w-full flex flex-col gap-y-4">
                        <Label
                            htmlFor="password"
                            className="text-light_text_black dark:text-dark_text_white"
                        >
                            Enter password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="********"
                            type="password"
                            className="text-light_text_black dark:text-dark_text_white border-light_text_black dark:border-dark_text_white bg-transparent"
                        ></Input>
                    </span>
                    <Button type="button" className="w-32">
                        Login
                    </Button>
                </div>
                <div
                    id="or-text"
                    className="flex items-center justify-center gap-x-4 text-light_text_black dark:text-dark_text_white text-center opacity-50"
                >
                    <span className="h-[1px] w-32 bg-light_text_black dark:bg-dark_text_white"></span>
                    or
                    <span className="h-[1px] w-32 bg-light_text_black dark:bg-dark_text_white"></span>
                </div>
            </div>
        </div>
    );
}

export default page;
