import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DownloadIcon, InfoIcon, MoreVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const GeneratedFormItem = () => {
    return (
        <div className="bg-foreground/5 hover:bg-foreground/10 border-muted flex w-full items-end gap-6 rounded-xl border p-6 transition max-lg:flex-col lg:justify-between">
            <div>
                <span className="mb-2 block font-medium">
                    Student trip form
                </span>
                <p className="text-muted-foreground max-w-lg">
                    &#9679;{" "}
                    {
                        "Lorem ipsum text here is byte Fill out all details with mandatory fields and submit it"
                    }
                </p>
                <div className="mt-6 flex gap-x-2">
                    <InfoIcon size={20} /> Cascade in {"5"} days
                </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 lg:justify-center">
                <span>36 replies</span>
                <Button variant={"default"} size={"icon"}>
                    <DownloadIcon size={20} />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant={"ghost"} size={"icon"}>
                            <MoreVerticalIcon size={20} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                        <DropdownMenuLabel>More</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="bg-destructive rounded-full">
                                <span className="text-destructive-foreground w-full text-center">
                                    Delete form
                                </span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default GeneratedFormItem;