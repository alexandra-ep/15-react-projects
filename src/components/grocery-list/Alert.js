import { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2800);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
