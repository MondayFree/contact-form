import { memo } from "react";
import type {KeyboardEvent} from 'react';

type PropsType = {
  title: string, 
  email?: boolean,
  id: string,
  status: boolean,
  setValue: (arg: string) => void,
  setStatus: (arg: boolean) => void,
}

const TextField = ({title, email, id, setValue, setStatus, status}: PropsType) => {
  const typing = (event: KeyboardEvent<HTMLInputElement> & {target: HTMLInputElement}) => {
    setValue(event.target.value);
    setStatus(false);    
  }

  return (<div>
    <label htmlFor={id} className="capitalize text-[16px]">{title} <span className="text-primary-green-medium">*</span></label>
    <br />
    <input onInput={typing} type={email ? 'email' : 'text'} id={id} name={id} className={`outline-none border-[1.5px] border-solid w-full py-3 px-4 rounded-md mt-2 ${status ? "border-primary-green-red hover:border-primary-green-red focus:border-primary-green-red" : "border-neutral-grey-medium hover:border-primary-green-medium focus:border-primary-green-medium"}`}/>
    {status ? <p className="text-primary-green-red mt-2 text-[15px]">{email ? 'Please enter a valid email address' : 'This field is required'}</p> : ""}
  </div>)
};


export default memo(TextField);