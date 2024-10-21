import { memo } from "react";

const ConfirmStatement = ({setStatus, status}: {status: boolean, setStatus: (arg: boolean) => void}) => {
  return (<div>
    <div className="flex items-center gap-4 cursor-pointer">
      <input type="checkbox" id="statement" name="confirm" onInput={() => setStatus(false)} className="accent-primary-green-medium"/>
      <label htmlFor="statement" className="cursor-pointer">I consent to being contancted by the team <span className="text-primary-green-medium">*</span></label>
    </div>
    {status ? <p className="text-primary-green-red mt-2">To submit this form, please consent to being contacted</p> : ""}
  </div>);
};

export default memo(ConfirmStatement);