import { ReactNode } from "react";

const Title = ({ children }: {children: ReactNode}) => {
    return (
        <h1 className="md:mb-12 mb-6 xl:text-5xl lg:text-4xl text-3xl font-semibold">
            {children}
        </h1>
    );
};

export default Title;