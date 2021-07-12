import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: "To is required" })}
        />
        <ErrorMessage
          errors={errors}
          name="to"
          render={({ message }) => <p className="sendMail__error">{message}</p>}
        />

        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: "Subject is required" })}
        />
        <ErrorMessage
          errors={errors}
          name="subject"
          render={({ message }) => <p className="sendMail__error">{message}</p>}
        />

        <input
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: "Message is required" })}
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => <p className="sendMail__error">{message}</p>}
        />

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="container"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
