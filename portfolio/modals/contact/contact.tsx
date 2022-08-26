import styles from './contact.module.css';
import React, { useRef, useState } from 'react';
import { IWindowChildProps } from '../../shared/interfaces';
import emailjs from '@emailjs/browser';

const ContactModal = (props: IWindowChildProps) => {
  const form = useRef<HTMLFormElement>(null);
  const fromInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const subjectInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);
  const sendButtonDiv = useRef<HTMLDivElement>(null);

  const parentDiv = useRef<HTMLDivElement>(null);

  const [statusMsg, setStatusMsg] = useState<string | undefined | null>(undefined);
  const [formValid, setFormValid] = useState<boolean>(false);

  React.useEffect(() => {
    new ResizeObserver((entries) => windowSize(entries)).observe(parentDiv.current!);
  }, []);

  function windowSize(entries: ResizeObserverEntry[]) {
    entries.forEach((entry) => {
      if (parentDiv.current) {
        if (entry.contentRect.width < 500) {
          fromInput.current?.classList.add('col-start-5', 'col-span-8');
          nameInput.current?.classList.add('col-start-5', 'col-span-8');
          subjectInput.current?.classList.add('col-start-5', 'col-span-8');
          messageInput.current?.classList.add('col-start-5', 'col-span-8');

          sendButtonDiv.current?.classList.remove('col-start-4');
          sendButtonDiv.current?.classList.add('col-start-5');
        } else {
          fromInput.current?.classList.remove('col-start-5', 'col-span-8');
          nameInput.current?.classList.remove('col-start-5', 'col-span-8');
          subjectInput.current?.classList.remove('col-start-5', 'col-span-8');

          messageInput.current?.classList.remove('col-start-5');
          sendButtonDiv.current?.classList.add('col-start-4');
        }
      }
    });
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMsg(null);

    const data = new FormData(e.target as HTMLFormElement);
    emailjs.sendForm('service_ubqx03l', 'template_8su46nk', e.target as HTMLFormElement, '_JVzXzxuudcY4sHj-').then(
      (result: any) => {
        fromInput.current!.value = '';
        nameInput.current!.value = '';
        subjectInput.current!.value = '';
        messageInput.current!.value = '';

        setStatusMsg('Thanks for contacting me. I will get back to you as soon as I can.');
      },
      (error: any) => {
        setStatusMsg(
          'An error has occurred while sending this message. Excuse my bad coding skills. Contact me manually here instead: yasir.fayrooz@hotmail.com'
        );
      }
    );
  };

  function validateForm() {
    setFormValid(
      fromInput.current?.value !== '' &&
        nameInput.current?.value !== '' &&
        subjectInput.current?.value !== '' &&
        messageInput.current?.value !== ''
    );
  }

  return (
    <div className="flex flex-col w-full h-full max-w-xl max-h-xl mx-auto overflow-y-auto" ref={parentDiv}>
      <form className="flex flex-col h-full m-3" ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-12 mr-2">
          <h3 className="col-span-2">From:</h3>
          <input
            ref={fromInput}
            type="email"
            className="w-full col-span-10 p-2 text-gray-500 bg-slate-300 outline-none border-2 border-b-green-500 rounded"
            placeholder="Enter your email address here"
            name="email"
            onChange={() => validateForm()}
          />
        </div>

        <div className="grid grid-cols-12 mt-2 mr-2">
          <h3 className="col-span-2">Name:</h3>
          <input
            ref={nameInput}
            type="text"
            name="name"
            autoComplete="off"
            className="w-full col-span-10 p-2 text-gray-500 bg-slate-300 outline-none border-2 border-b-green-500 rounded"
            placeholder="Enter your name"
            onChange={() => validateForm()}
          />
        </div>

        <div className="grid grid-cols-12 mt-2 mr-2">
          <h3 className="col-span-2 min-w-">Subject:</h3>
          <input
            ref={subjectInput}
            type="text"
            name="subject"
            autoComplete="off"
            className="w-full col-span-10 p-2 text-gray-500 bg-slate-300 outline-none border-2 border-b-green-500 rounded"
            placeholder="Subject of the email"
            onChange={() => validateForm()}
          />
        </div>

        <div className="grid grow grid-cols-12 mt-2 mr-2">
          <h3 className="min-w-fit col-span-2">Message:</h3>
          <textarea
            ref={messageInput}
            name="message"
            autoComplete="off"
            className="h-full resize-none col-span-10 p-2 text-gray-500 bg-slate-300 outline-none border-2 border-b-green-500 rounded"
            placeholder="Email message"
            onChange={() => validateForm()}
          ></textarea>
        </div>

        <div className="grid grid-cols-12 mt-2 mr-2">
          <div className="col-span-8 col-start-4" ref={sendButtonDiv}>
            {statusMsg && <p className="text-[0.8em] mb-2">{statusMsg}</p>}
            <input
              type="submit"
              value="Send"
              disabled={statusMsg === null || !formValid}
              className="w-full 
              bg-blue-500/75 
              hover:bg-blue-600/75 
              disabled:opacity-50 
              disabled:hover:bg-blue-500/75 
              disabled:cursor-not-allowed 
              transition-all 
              ease-in-out delay-150 
              py-4 
              rounded 
              cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactModal;
