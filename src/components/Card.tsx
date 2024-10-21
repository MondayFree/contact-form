import { memo } from "react";
import Title from "./Title";
import TextField from "./TextField";
import RadioInput from "./RadioInput";
import TextBox from "./TextBox";
import ConfirmStatement from "./ConfirmStatement";
import SubmitButton from "./SubmitButton";

const Card = () => {
  return (<div className="w-full bg-neutral-white px-5 py-6 rounded-xl sm:w-[600px] sm:h-max">
    <Title/>
    <div className="space-y-6 mt-7 sm:grid sm:space-y-0 sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-4">
      <TextField title="first name"/>
      <TextField title="last name"/>
    </div>
    <div className="mt-6">
      <TextField title="email address" email={true}/>
    </div>
    <div className="mt-6">
      <RadioInput/>
    </div>
    <div className="mt-6">
      <TextBox/>
    </div>
    <div className="mt-9">
      <ConfirmStatement/>
    </div>
    <div className="mt-9">
      <SubmitButton/>
    </div>
  </div>)
};

export default memo(Card);