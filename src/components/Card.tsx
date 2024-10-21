import { memo, useState } from "react";
import Title from "./Title";
import TextField from "./TextField";
import RadioInput from "./RadioInput";
import TextBox from "./TextBox";
import ConfirmStatement from "./ConfirmStatement";
import SubmitButton from "./SubmitButton";
import type { FormEvent } from "react";
import Swal from 'sweetalert2'

type SubmitParam = FormEvent<HTMLFormElement> & {
  target: {
    radio: HTMLInputElement[],
    confirm: HTMLInputElement,
    first: HTMLInputElement,
    last: HTMLInputElement,
    email: HTMLInputElement,
    textBox: HTMLInputElement,
  }
}

const Card = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [firstNameStatus, setFirstNameStatus] = useState<boolean>(false);
  const [lastName, setLastName] = useState<string>("");
  const [lastNameStatus, setLastNameStatus] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailStatus, setEmailStatus] = useState<boolean>(false);
  const [radioStatus, setRadioStatus] = useState<boolean>(false);
  const [textBox, setTextBox] = useState<string>("");
  const [textBoxStatus, setTextBoxStatus] = useState<boolean>(false);
  const [confirmStatus, setConfirmStatus] = useState<boolean>(false);

  const submit = (event: SubmitParam) => {
    event.preventDefault();
    if(!firstName.trim()) setFirstNameStatus(true);
    if(!lastName.trim()) setLastNameStatus(true);
    if(!email.trim() || !(/^[^@].*@.*[^@]$/).test(email.trim())) setEmailStatus(true);
    if(!(event.target.radio[0].checked || event.target.radio[1].checked)) setRadioStatus(true);
    if(!textBox.trim()) setTextBoxStatus(true);
    if(!event.target.confirm.checked) setConfirmStatus(true);

    if(!(firstNameStatus || lastNameStatus || emailStatus || radioStatus || textBoxStatus || confirmStatus) && firstName.trim() && lastName.trim() && (email.trim() && (/^[^@].*@.*[^@]$/).test(email.trim())) && (event.target.radio[0].checked || event.target.radio[1].checked) && textBox.trim() && event.target.confirm.checked) {
      const form = event.target;
      form.first.value = "";
      form.last.value = "";
      form.email.value = "";
      form.radio[0].checked = false;
      form.radio[1].checked = false;
      form.textBox.value = "";
      form.confirm.checked = false;

      Swal.fire({
        title: 'Message Sent!',
        text: "Thanks for completing the form. We'll in touch soon!",
        icon: 'success',
        confirmButtonText: 'Close',
        showConfirmButton: false
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setTextBox("");
    }
  };

  return (<div className="w-full bg-neutral-white px-5 py-6 rounded-xl sm:w-[600px] sm:h-max">
    <form action="" noValidate onSubmit={submit}>
      <Title/>
      <div className="space-y-6 mt-7 sm:grid sm:space-y-0 sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-4">
        <TextField title="first name" id="first" setValue={setFirstName} setStatus={setFirstNameStatus} status={firstNameStatus}/>
        <TextField title="last name" id="last" setValue={setLastName} setStatus={setLastNameStatus} status={lastNameStatus}/>
      </div>
      <div className="mt-6">
        <TextField title="email address" id="email" email={true} setValue={setEmail} setStatus={setEmailStatus} status={emailStatus}/>
      </div>
      <div className="mt-6">
        <RadioInput status={radioStatus} setStatus={setRadioStatus}/>
      </div>
      <div className="mt-6">
        <TextBox setValue={setTextBox} setStatus={setTextBoxStatus} status={textBoxStatus}/>
      </div>
      <div className="mt-9">
        <ConfirmStatement status={confirmStatus} setStatus={setConfirmStatus}/>
      </div>
      <div className="mt-9">
        <SubmitButton/>
      </div>
    </form>
  </div>)
};

export default memo(Card);