import { ReactNode } from "react";

const PageContainer = ({ children }: {children: ReactNode}) => {
    return(
        <div className="md:px-8 px-5 md:py-12 py-6">
            {children}
        </div>
    );
};

export default PageContainer;