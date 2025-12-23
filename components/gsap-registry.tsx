"use client";

import { useGSAP } from "@gsap/react";
import gsap, {
    Draggable,
    Flip,
    ScrollTrigger,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase,
} from "gsap/all";

// CLUB GSAP PLUGINS
// These plugins are paid and require a private registry or gsap-bonus.tgz.
// Uncomment them if you have installed the premium package.
/*
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";
*/

export function GSAPRegistry({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        // Register standard plugins
        gsap.registerPlugin(
            useGSAP,
            Draggable,
            Flip,
            ScrollTrigger,
            TextPlugin,
            RoughEase,
            ExpoScaleEase,
            SlowMo,
            CustomEase
        );

        // Register Club GSAP plugins if available
        /*
        gsap.registerPlugin(
          DrawSVGPlugin,
          EaselPlugin,
          MorphSVGPlugin,
          ScrollSmoother,
          SplitText,
          CustomBounce,
          CustomWiggle
        );
        */
    });

    return <>{children}</>;
}
