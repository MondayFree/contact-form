import { memo } from "react";
import Title from "./Title";
import TextField from "./TextField";
import RadioInput from "./RadioInput";
import TextBox from "./TextBox";
import ConfirmStatement from "./ConfirmStatement";
import SubmitButton from "./SubmitButton";

const Card = () => {
  return (<div className="w-full bg-neutral-white px-5 py-6 rounded-xl">
    <Title/>
    <div className="space-y-6 mt-7">
      <TextField title="first name"/>
      <TextField title="last name"/>
      <TextField title="email address" email={true}/>
    </div>
    <RadioInput/>
    <TextBox/>
    <ConfirmStatement/>
    <SubmitButton/>
  </div>)
};

export default memo(Card);