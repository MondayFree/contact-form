import { memo } from "react";
import type {KeyboardEvent} from 'react';

type PropsType = {
  setValue: (arg: string) => void,
  setStatus: (arg: boolean) => void,
  status: boolean
}

const TextBox = ({setValue, setStatus, status}: PropsType) => {
  const typing = (event: KeyboardEvent<HTMLTextAreaElement> & {target: HTMLInputElement}) => {
    setValue(event.target.value);
    setStatus(false);    
  }

  return (<div>
    <p className="capitalize text-[16px]">message <span className="text-primary-green-medium">*</span></p>
    <textarea onInput={typing} name="textBox" className={`border-[1.5px] border-solid w-full h-72 rounded-md outline-none p-3 mt-2 sm:h-36 ${status ? "border-primary-green-red hover:border-primary-green-red focus:border-primary-green-red" : "border-neutral-grey-medium hover:border-primary-green-medium focus:border-primary-green-medium"}`}></textarea>
    {status ? <p className="mt-2 text-primary-green-red">This field is required</p> : ""}
  </div>);
};

export default memo(TextBox);