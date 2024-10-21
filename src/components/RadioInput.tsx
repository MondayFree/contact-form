import { memo } from "react";

const RadioInput = () => {
  return (<div className="mt-6">
    <p className="capitalize text-[16px]">query type <span className="text-primary-green-medium">*</span></p>
    <div className="border-2 border-neutral-grey-medium border-solid rounded-md py-3 px-4 flex items-center space-x-3 capitalize mt-3">
      <input type="radio" name="radio" id="radio1" className="accent-primary-green-medium"/>
      <label htmlFor="radio1" className="text-[16px]">general enquiry</label>
    </div>
    <div className="border-2 border-neutral-grey-medium border-solid rounded-md py-3 px-4 flex items-center space-x-3 capitalize mt-4">
      <input type="radio" name="radio" id="radio2" className="accent-primary-green-medium"/>
      <label htmlFor="radio2" className="text-[16px]">suport request</label>
    </div>
  </div>);
};

export default memo(RadioInput);