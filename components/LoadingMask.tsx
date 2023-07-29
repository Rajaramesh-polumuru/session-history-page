import { FC } from "react";

interface LoadingMaskProps {
  children?: React.ReactNode;
  isLoading?: boolean;
}
const LoadingMask: FC<LoadingMaskProps> = ({ children, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className=" opacity-50 flex items-center justify-center w-full h-full ">
          <div className="flex items-center justify-center absolute">
            <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin h-12 w-12"></div>
            <span className="ml-2 font-semibold text-blue-500">Loading...</span>
          </div>
          {children}
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingMask;
