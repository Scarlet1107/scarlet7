"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type dictionary from "@/dictionaries/en.json";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export type AppOverviewItem =
    (typeof dictionary)["AppOverview"]["apps"][number];

type AppDialogProps = {
    app: AppOverviewItem;
    trigger: React.ReactNode;
};

const AppDialog = ({ app, trigger }: AppDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <div className="flex items-start gap-4">
                        {app.icon && (
                            <Image
                                src={app.icon}
                                alt={`${app.title} icon`}
                                width={64}
                                height={64}
                                className="rounded"
                            />
                        )}
                        <div className="space-y-2">
                            <DialogTitle>{app.title}</DialogTitle>
                            {app.description && (
                                <DialogDescription>{app.description}</DialogDescription>
                            )}
                        </div>
                    </div>
                </DialogHeader>
                {app.content && (
                    <p className="whitespace-pre-line text-sm md:text-base">
                        {app.content}
                    </p>
                )}
                {app.techStack && app.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {app.techStack.map((tech, idx) => (
                            <Badge key={tech} variant={idx === 0 ? "default" : "secondary"}>
                                {tech}
                            </Badge>
                        ))}
                    </div>
                )}
                {app.url && (
                    <Link
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                    >
                        {app.url}
                    </Link>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default AppDialog;
