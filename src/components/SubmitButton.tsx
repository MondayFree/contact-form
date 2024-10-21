import { memo } from "react";

const SubmitButton = () => {
  return (<div>
    <button type="submit" className="bg-primary-green-medium text-neutral-white w-full font-semibold capitalize text-lg rounded-md py-3 text-[16px]">submit</button>
  </div>);
};

export default memo(SubmitButton);