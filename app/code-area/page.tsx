"use client";

import Editor from "@/components/core/editor";
import Preview from "@/components/core/preview";
import "react-mosaic-component/react-mosaic-component.css";
import { Mosaic, MosaicNode, MosaicWindow } from "react-mosaic-component";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import useCodeAreaStore from "@/data-store/code-area-store";
import { useStepperStore } from "@/data-store/stepper-store";
import validateUser from "@/lib/validate-user";

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
    const router = useRouter();
    const { mosaicThemeDark } = useCodeAreaStore();
    const { email, check, progress, challenge } = useStepperStore();

    if (validateUser("Code", email, check, challenge, progress)) {
        return (
            <p>
                error, no bypassing the required form to enter the coding area!
            </p>
        );
    } else {
        return (
            <div className='h-screen'>
                <div className='pointer-events-auto absolute inset-0 z-20 bg-white bg-opacity-50 xl:hidden' />
                <div className='absolute inset-0 z-30 flex items-center justify-center xl:hidden'>
                    <div className='w-3/4 max-w-lg rounded-xl bg-black p-6 shadow-lg'>
                        <h2 className='mb-4 text-center text-xl font-bold text-white'>
                            It looks like you&quot;re on a small screen
                        </h2>
                        <p className='text-sm font-semibold text-gray-400'>
                            We hate to be non-inclusive towards phones and
                            tablets, however we want to provide you with the
                            best experience possible!
                        </p>
                        <div className='flex justify-center'>
                            <Button
                                variant='destructive'
                                className='mt-2'
                                onClick={() => router.push("/")}
                            >
                                Back to main page...
                            </Button>
                        </div>
                    </div>
                </div>
                <Mosaic<MosaicKey>
                    className={cn(
                        "mosaic-blueprint-theme",
                        mosaicThemeDark && "bp4-dark"
                    )}
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
                                        <>
                                            <Editor />
                                        </>
                                    </MosaicWindow>
                                );
                            case "PREVIEW":
                                return (
                                    <MosaicWindow<MosaicKey>
                                        title='Preview'
                                        path={path}
                                    >
                                        <>
                                            <Preview />
                                        </>
                                    </MosaicWindow>
                                );
                            default:
                                return <></>; // Return a React Fragment as a fallback
                        }
                    }}
                />
            </div>
        );
    }
};

export default CodeArea;
