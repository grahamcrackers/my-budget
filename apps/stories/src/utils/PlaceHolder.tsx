import React from "react";

interface PlaceHolderProps {
    padding?: string;
}

export const PlaceHolder: React.FC<PlaceHolderProps> = ({ padding = "p-6" }) => (
    <div className={`h-full ${padding}`}>
        <div className="relative h-full overflow-hidden border border-gray-400 border-dashed rounded-xl">
            <svg className="absolute inset-0 w-full h-full stroke-gray-900/10" fill="none">
                <defs>
                    <pattern
                        id="pattern-45359b67-d0dc-43b4-9918-e79c5cae5d74"
                        x="0"
                        y="0"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                    </pattern>
                </defs>
                <rect
                    stroke="none"
                    fill="url(#pattern-45359b67-d0dc-43b4-9918-e79c5cae5d74)"
                    width="100%"
                    height="100%"
                ></rect>
            </svg>
        </div>
    </div>
);
