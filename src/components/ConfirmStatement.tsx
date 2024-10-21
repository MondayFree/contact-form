import { memo } from "react";

const ConfirmStatement = () => {
  return (<div className="flex items-center gap-5 mt-9">
    <input type="checkbox" id="statement" className="accent-primary-green-medium"/>
    <label htmlFor="statement">I consent to being contancted by the team <span className="text-primary-green-medium">*</span></label>
  </div>);
};

export default memo(ConfirmStatement);