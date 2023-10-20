"use client";

import Editor from "@/components/core/editor";
import Preview from "@/components/core/preview";
import "react-mosaic-component/react-mosaic-component.css";
import { Mosaic, MosaicNode, MosaicWindow } from "react-mosaic-component";
import { useState } from "react";

type MosaicKey = "EDITOR" | "PREVIEW";

const initialLayout: MosaicNode<MosaicKey> = {
    direction: "row",
    first: "EDITOR",
    second: "PREVIEW",
    splitPercentage: 50,
};

const CodeArea = () => {
    const [layout, setLayout] = useState<MosaicNode<MosaicKey> | null>(
        initialLayout
    );
    return (
        <div className='h-screen'>
            <Mosaic<MosaicKey>
                className='mosaic-blueprint-theme'
                value={layout || initialLayout}
                onChange={(newLayout) => setLayout(newLayout)}
                renderTile={(id, path) => {
                    switch (id) {
                        case "EDITOR":
                            return (
                                <MosaicWindow<MosaicKey>
                                    title='Editor'
                                    path={path}
                                >
                                    <div className='h-screen bg-black'>
                                        <Editor />
                                    </div>
                                </MosaicWindow>
                            );
                        case "PREVIEW":
                            return (
                                <MosaicWindow<MosaicKey>
                                    title='Preview'
                                    path={path}
                                >
                                    <div>
                                        <Preview />
                                    </div>
                                </MosaicWindow>
                            );
                        default:
                            return <></>; // Return a React Fragment as a fallback
                    }
                }}
            />
        </div>
    );
};

export default CodeArea;
