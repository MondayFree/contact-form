import { memo, useId, useMemo } from "react";

const TextField = ({title, email}: {title: string, email?: boolean}) => {
  const id = useMemo(() => useId(), []);

  return (<div>
    <label htmlFor={id} className="capitalize text-[16px]">{title} <span className="text-primary-green-medium">*</span></label>
    <br />
    <input type={email ? 'email' : 'text'} id={id} className="outline-none border-2 border-neutral-grey-medium border-solid w-full py-3 px-4 rounded-md mt-2"/>
  </div>)
};


export default memo(TextField);