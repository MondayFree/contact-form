import { memo } from "react";

const RadioInput = () => {
  return (<div>
    <p className="capitalize text-[16px]">query type <span className="text-primary-green-medium">*</span></p>
    <div className="sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-4 sm:mt-3">
      <div className="border-2 border-neutral-grey-medium border-solid rounded-md py-3 px-4 flex items-center space-x-3 capitalize mt-3 sm:mt-0">
        <input type="radio" name="radio" id="radio1" className="accent-primary-green-medium"/>
        <label htmlFor="radio1" className="text-[16px]">general enquiry</label>
      </div>
      <div className="border-2 border-neutral-grey-medium border-solid rounded-md py-3 px-4 flex items-center space-x-3 capitalize mt-4 sm:mt-0">
        <input type="radio" name="radio" id="radio2" className="accent-primary-green-medium"/>
        <label htmlFor="radio2" className="text-[16px]">suport request</label>
      </div>
    </div>
  </div>);
};

export default memo(RadioInput);