import { memo } from "react";

const TextBox = () => {
  return (<div className="mt-6">
    <p className="capitalize text-[16px]">message <span className="text-primary-green-medium">*</span></p>
    <textarea className="border-2 border-neutral-grey-medium border-solid w-full h-72 rounded-md outline-none p-3 mt-2"></textarea>
  </div>);
};

export default memo(TextBox);