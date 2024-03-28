"use client";
import React, { useContext } from "react";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import Toast from "../toast/Toast";

// Define a type for the toast object
interface ToastObject {
  id: string;
  variant: string;
  message: string;
}

function ToastShelf() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("ToastShelf must be used within a ToastProvider");
  }

  const { toasts } = context;

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map((toast: ToastObject) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
