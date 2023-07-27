import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type ViewProps = {
    data?: string | null;
};

const ZOOM_SIZE = 100; // px

export const View: React.FC<ViewProps> = ({ data }) => {
    const [isActive, setIsActive] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const zoomRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const onControlEnter = () => {
        setIsActive(true);
    };

    const onControlLeave = () => {
        setIsActive(false);
    };

    useLayoutEffect(() => {
        /**
         * Take the image from Next Image component and set the background image of the magnifier glass
         * That way we can use the same image and don't have to load it again
         */

        const image = imageRef.current;
        const zoom = zoomRef.current;
        const wrapper = wrapperRef.current;

        if (image && zoom && wrapper && data) {
            const src = imageRef.current.attributes.getNamedItem('src')?.value || data;
            const backgroundValue = `url(${src})`;

            wrapper.style.backgroundImage = backgroundValue;
            zoom.style.backgroundImage = backgroundValue;
        }

        return () => {
            wrapper?.style.removeProperty('background-image');
            zoom?.style.removeProperty('background-image');
        };
    }, [data]);

    /**
     * Handle the movement of the magnifier glass
     */
    const onControlMove = useCallback((event: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>) => {
        const currentTarget = event.currentTarget;
        const rect = currentTarget.getBoundingClientRect();

        const clientX =
            (event as React.MouseEvent<HTMLImageElement>).clientX || (event as React.TouchEvent<HTMLImageElement>).touches[0].clientX;
        const clientY =
            (event as React.MouseEvent<HTMLImageElement>).clientY || (event as React.TouchEvent<HTMLImageElement>).touches[0].clientY;

        if (zoomRef.current) {
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            const imgWidth = currentTarget?.width;
            const imgHeight = currentTarget?.height;
            let xPositionPercent = (x / imgWidth) * ZOOM_SIZE;
            let yPositionPercent = (y / imgHeight) * ZOOM_SIZE;
            const ratio: number = 0.07;
            const margin: number = 3;

            if (x > 0.01 * imgWidth) {
                xPositionPercent += ratio * xPositionPercent;
            }

            if (y >= 0.01 * imgHeight) {
                yPositionPercent += ratio * yPositionPercent;
            }

            /**
             * Set the background position of the magnifier glass
             */
            zoomRef.current.style.backgroundPosition = `${xPositionPercent - margin}% ${yPositionPercent - margin}%`;

            /**
             * Set the position of the magnifier glass
             */
            zoomRef.current.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
        }
    }, []);

    const zoomClassName = clsx(
        'block absolute top-0 left-0 ring-2 ring-color-40 rounded-full shadow-md pointer-events-none bg-no-repeat transition-opacity duration-200 overflow-hidden opacity-0 bg-[length:2000%] bg-color-20',
        {
            'opacity-100': isActive,
        },
    );

    return (
        <div
            ref={wrapperRef}
            className="flex items-center justify-center col-span-12 lg:col-span-7 max-lg:h-[55vh] h-full lg:h-[calc(100vh-var(--header-height))] max-lg:h-[calc(55vh-var(--header-height-mobile))] lg:min-h-[450px] lg:sticky top-20 overflow-hidden rounded-large">
            <div className="p-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 w-full h-full flex items-center justify-center">
                <div className="flex items-center justify-center h-auto relative cursor-none">
                    {data && (
                        <>
                            <Image
                                ref={imageRef}
                                className="block w-full object-contain border-0"
                                onMouseEnter={onControlEnter}
                                onMouseLeave={onControlLeave}
                                onMouseMove={onControlMove}
                                onTouchMove={onControlMove}
                                onTouchStart={onControlEnter}
                                onTouchEnd={onControlLeave}
                                src={data}
                                alt="image"
                                width={600}
                                height={600}
                                sizes="100vw"
                                priority
                                placeholder="blur"
                                blurDataURL={data}
                            />

                            {/* Zoom */}
                            <div
                                ref={zoomRef}
                                className={zoomClassName}
                                // Better to not use inline styles, but it's easier to set the size of the magnifier glass
                                style={{
                                    width: ZOOM_SIZE,
                                    height: ZOOM_SIZE,
                                }}
                                aria-hidden
                            />
                        </>
                    )}

                    {!data && <div>no data</div>}
                </div>
            </div>
        </div>
    );
};
