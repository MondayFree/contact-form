import { memo } from "react";

type PropsType = {
  status: boolean,
  setStatus: (arg: boolean) => void
}

const RadioInput = ({status, setStatus}: PropsType) => {
  return (<div>
    <p className="capitalize text-[16px]">query type <span className="text-primary-green-medium">*</span></p>
    <div className="sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-4 sm:mt-3">
      <label htmlFor="radio1" className="cursor-pointer">
        <div className="border-[1.5px] border-neutral-grey-medium border-solid rounded-md py-3 px-4 flex items-center space-x-3 capitalize mt-3 hover:border-primary-green-medium has-[:checked]:bg-primary-green-light has-[:checked]:border-primary-green-medium sm:mt-0">
          <input type="radio" name="radio" id="radio1" onInput={() => setStatus(false)} className="accent-primary-green-medium"/>
          <label htmlFor="radio1" className="text-[16px] cursor-pointer">general enquiry</label>
        </div>
      </label>
      <label htmlFor="radio2" className="cursor-pointer">
        <div className="border-[1.5px] border-neutral-grey-medium border-solid rounded-md py-3 px-4 flex items-center space-x-3 capitalize mt-4 hover:border-primary-green-medium has-[:checked]:bg-primary-green-light has-[:checked]:border-primary-green-medium sm:mt-0">
          <input type="radio" name="radio" id="radio2" onInput={() => setStatus(false)} className="accent-primary-green-medium"/>
          <label htmlFor="radio2" className="text-[16px] cursor-pointer">suport request</label>
        </div>
      </label>
    </div>
    {status ? <p className="mt-2 text-primary-green-red">Please select a query type</p> : ""}
  </div>);
};

export default memo(RadioInput);