// Minimal SVG icon set — add more as needed
type IconProps = React.SVGProps<SVGSVGElement>;

const icon = (path: string, viewBox = "0 0 24 24") =>
    function Icon({ className, ...props }: IconProps) {
        return (
            <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                <path d={path} />
            </svg>
        );
    };

export const Icons = {
    Brain: icon("M9.5 2a2.5 2.5 0 0 1 5 0v.5A2.5 2.5 0 0 1 12 5a2.5 2.5 0 0 1-2.5-2.5V2zM4 9.5A2.5 2.5 0 0 1 6.5 7h11A2.5 2.5 0 0 1 20 9.5v5A2.5 2.5 0 0 1 17.5 17h-11A2.5 2.5 0 0 1 4 14.5v-5zM12 17v5M8 22h8"),
    Server: icon("M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zM2 14a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4zM6 10h.01M6 18h.01"),
    Database: icon("M12 2C8.13 2 5 3.79 5 6v12c0 2.21 3.13 4 7 4s7-1.79 7-4V6c0-2.21-3.13-4-7-4zM5 12c0 2.21 3.13 4 7 4s7-1.79 7-4M5 9c0 2.21 3.13 4 7 4s7-1.79 7-4"),
    React: icon("M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10S22 17.52 22 12 17.52 2 12 2z"),
    Docker: icon("M22 12.5c-.25-1.5-1.5-2.5-3-2.5h-.5v-1a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h14a3 3 0 0 0 2.5-3.5z"),
    Terminal: icon("M4 17l6-6-6-6M12 19h8"),
    Globe: icon("M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"),
    Github: icon("M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),
    Linkedin: icon("M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"),
    Mail: icon("M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"),
    Briefcase: icon("M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"),
    Download: icon("M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"),
    ArrowRight: icon("M5 12h14M12 5l7 7-7 7"),
    Send: icon("M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"),
    Sparkles: icon("M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM5 19l.75 2.25L8 22l-2.25.75L5 25l-.75-2.25L2 22l2.25-.75zM19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75z"),
    Zap: icon("M13 2L3 14h9l-1 8 10-12h-9l1-8z"),
};
