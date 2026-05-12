"use client";

import { useState } from "react";
import { Icons } from "./ui/Icons";

interface Props {
    className?: string;
    label?: string;
    showIcon?: boolean;
}

export default function ResumeDownloadButton({ className, label = "Resume", showIcon = true }: Props) {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/resume");
            if (!response.ok) throw new Error("Failed to fetch resume");
            const blob = await response.blob();

            // Create a temporary object URL — this guarantees filename is respected
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "Sinu_Arlow_Baby_Resume.pdf";
            document.body.appendChild(link);
            link.click();

            // Cleanup
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
                document.body.removeChild(link);
            }, 200);
        } catch (err) {
            console.error("Resume download failed:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleDownload} disabled={loading} className={className}>
            {showIcon && (
                <Icons.Download className={`w-5 h-5 ${loading ? "animate-bounce" : "group-hover:translate-y-1"} transition-transform`} />
            )}
            {loading ? "Downloading..." : label}
        </button>
    );
}
