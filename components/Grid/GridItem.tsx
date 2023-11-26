"use client";
import Image from "next/image";
import { useState } from "react";

import { IImageData, IVirtualToursData } from "../../utils/Interfaces";
import Portal from "../Portal";
import { buttonText } from "../../utils/constants";
import Button from "../Button";
import Alert from "../Alert";
import PopupSlider from "../PopupSlider";

interface Props {
    title: string
    data: IVirtualToursData[] | IImageData[]
    archiveUrl?: string
    isVirtualTour?: boolean
    showCount?: boolean
}

const GridItem = ({ title, showCount=false, data, isVirtualTour=false, archiveUrl }: Props) => {
    const [showAlert, setShowAlert] = useState(false);
    const [showSlider, setShowSlider] = useState(false);

    const imageUrl = isVirtualTour
        ? (data as IVirtualToursData[])[0].thumbnail
        : (data as IImageData[])[0].thumbnail;

    const handleButtonClick = async () => {
        if (isVirtualTour) {
            const url = (data as IVirtualToursData[])[0].url;
            await navigator.clipboard.writeText(url);
            setShowAlert(true);
        } else {
            if (!archiveUrl) {
                return;
            }
            window.open(archiveUrl, "_blank");
        }
    };

    const handleImageClick = () => {
        setShowSlider(true);
    };

    const handleSliderClose = () => {
        setShowSlider(false);
    };

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    return (
        <>
            <div className="group flex flex-col rounded-lg border border-gray-100 overflow-hidden shadow-lg hover:border-gray-200">
                {isVirtualTour ? (
                    <a target="_blank" href={(data as IVirtualToursData[])[0].url} className="relative w-full h-52 cursor-pointer">
                        <Image
                            className="object-cover"
                            src={imageUrl}
                            alt="Image"
                            priority
                            fill
                            sizes="400px"
                        />
                    </a>
                ) : (
                    <div className="relative w-full h-52 cursor-pointer" onClick={handleImageClick}>
                        <Image
                            className="object-cover"
                            src={imageUrl}
                            alt="Image"
                            priority
                            fill
                            sizes="400px"
                        />
                    </div>
                )}
                <div className="bg-gray-100 group-hover:bg-gray-200 p-5 grow flex items-center justify-between">
                    <div>
                        <div className="text-lg font-semibold">{title}</div>
                        { showCount && (
                            <div className="text-xs">{data.length}</div>
                        )}
                    </div>
                    <Button
                        text={isVirtualTour ? buttonText.copy : buttonText.download}
                        onClick={handleButtonClick}
                    />
                </div>
            </div>
            {showAlert && (
                <Portal>
                    <Alert onClose={handleAlertClose}/>
                </Portal>
            )}
            {showSlider && (
                <Portal>
                    <PopupSlider onClose={handleSliderClose} images={(data as IImageData[])} />
                </Portal>
            )}
        </>
    );
};

export default GridItem;