"use client";
import { IoIosClose } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { buttonText } from "../utils/constants";
import { IImageData } from "../utils/Interfaces";

import Button from "./Button";

interface Props {
    onClose: () => void
    images: IImageData[]
}

const PopupSlider = ( { onClose, images }: Props ) => {
    const overflowId = "popup-overflow";
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const length = images.length;
    const handlers = useSwipeable({
        onSwipedLeft: () => handleNextClick(),
        onSwipedRight: () => handlePrevClick(),
    });

    const handleOverflowClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLDivElement).id === overflowId) {
            onClose();
        }
    };

    const handleNextClick = () => {
        setCurrentImageIndex(currentImageIndex === length - 1 ? 0 : currentImageIndex + 1);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? length - 1 : currentImageIndex - 1);
    };

    const saveFile = () => {
        const currentImage = images[currentImageIndex];
        // TODO: add download file
        // eslint-disable-next-line
        console.log(currentImage)
    };

    return (
        <div
            data-testid="popup-overflow"
            id={overflowId}
            className="fixed w-full h-full flex justify-center items-center overlay-bg z-50 inset-0 px-1"
            onClick={handleOverflowClick}
        >
            <div className="max-h-fit bg-dark max-w-4xl w-full rounded-lg p-4 pt-12 relative">
                <IoIosClose
                    onClick={onClose}
                    className="text-3xl cursor-pointer absolute bg-yellow rounded-full top-2 right-4"
                />
                <div className="flex flex-col gap-2 items-center">
                    <div
                        {...handlers}
                        className="relative aspect-[4/3] overflow-hidden w-full"
                    >
                        <FaArrowLeft
                            data-testid="prev-button"
                            onClick={handlePrevClick}
                            className="z-10 text-4xl p-2 absolute rounded-full bg-yellow top-1/2 left-0 cursor-pointer"
                        />
                        <FaArrowRight
                            data-testid="next-button"
                            onClick={handleNextClick}
                            className="z-10 text-4xl p-2 absolute rounded-full bg-yellow top-1/2 right-0 cursor-pointer"
                        />
                        <div
                            data-testid="image-container"
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            className="relative h-full whitespace-nowrap duration-300"
                        >
                            {images.map((image, index) => (
                                <div key={index} className=" inline-block relative h-full w-full">
                                    <Image
                                        className="object-contain"
                                        src={image.original}
                                        alt="Image"
                                        fill
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                    <Button text={buttonText.download} onClick={saveFile} />
                </div>
            </div>

        </div>
    );

};

export default PopupSlider;
