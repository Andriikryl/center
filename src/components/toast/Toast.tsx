import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

type Icon = React.ComponentType<{ size: any }>;

interface ToastProps {
  id: string;
  variant: keyof typeof ICONS_BY_VARIANT;
  children: React.ReactNode;
}

// Define the type for the ICONS_BY_VARIANT object
const ICONS_BY_VARIANT: Record<string, Icon> = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }: ToastProps) {
  const context = React.useContext(ToastContext);

  // Ensure the context is defined before attempting to access its properties
  if (!context) {
    throw new Error("Toast must be used within a ToastProvider");
  }

  const { dismissToast } = context;
  const Icon = ICONS_BY_VARIANT[variant] || Info;

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
