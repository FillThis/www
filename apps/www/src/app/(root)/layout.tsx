/**
 * @license
 * Copyright 2024 ascen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ import Header from "@/components/header/Header";
import React from "react";

const layout = (props: { children: React.ReactNode }) => {
    return (
        <div className="bg-background text-foreground flex h-dvh max-h-full w-full flex-col text-white">
            <Header />
            <main className="h-full w-full p-8 py-4">{props.children}</main>
        </div>
    );
};

export default layout;
