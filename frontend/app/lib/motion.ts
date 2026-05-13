import type { Transition } from "framer-motion";

type Easing = [number, number, number, number];

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

/** Shared fade-up animation config for all sections */
export function fadeUp(delay = 0): {
    initial: { opacity: number; y: number };
    animate?: { opacity: number; y: number };
    whileInView?: { opacity: number; y: number };
    viewport?: { once: boolean };
    transition: Transition;
} {
    return {
        initial:    { opacity: 0, y: 16 },
        whileInView:{ opacity: 1, y: 0  },
        viewport:   { once: true        },
        transition: { duration: 0.55, delay, ease: EASE_OUT },
    };
}

/** For hero-section elements that animate on mount (not scroll) */
export function fadeIn(delay = 0): {
    initial:    { opacity: number; y: number };
    animate:    { opacity: number; y: number };
    transition: Transition;
} {
    return {
        initial:   { opacity: 0, y: 16 },
        animate:   { opacity: 1, y: 0  },
        transition:{ duration: 0.55, delay, ease: EASE_OUT },
    };
}
