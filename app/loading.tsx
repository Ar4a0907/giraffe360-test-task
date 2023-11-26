const Loading = () => {
    return (
        <main className="flex justify-center max-w-screen-xl mx-auto md:py-12 py-6">
            <div
                className="inline-block h-16 w-16 animate-spin rounded-full border-8 loader-color border-solid border-current motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
            </div>
        </main>
    );
};

export  default Loading;