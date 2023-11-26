"use client";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";

import { alertText } from "../utils/constants";

interface Props {
    onClose: () => void
}

const Alert = ({ onClose }: Props) => {
    const [currentProgress, setCurrentProgress] = useState(1);

    const frame = () => {
        setCurrentProgress(current => ++current);
    };

    useEffect(() => {
        const interval = setInterval(frame, 20);

        return(() => {
            clearInterval(interval);
        });
    }, []);

    useEffect(() => {
        if (currentProgress >= 100) {
            onClose();
        }
    }, [currentProgress, onClose]);

    return (
        <div className="absolute bg-lime-500 rounded-md bottom-36 left-1/2 -translate-x-1/2 p-3 overflow-hidden">
            <div className=" flex gap-5 items-center">
                <span className="text-white font-semibold">
                    {alertText}
                </span>
                <IoIosClose onClick={onClose} className="text-white text-xl cursor-pointer"/>
            </div>
            <div className="absolute bottom-0 h-1 w-full left-0">
                <div style={{ width: `${currentProgress}%` }} className="h-full bg-lime-700"></div>
            </div>
        </div>
    );
};

export default Alert;