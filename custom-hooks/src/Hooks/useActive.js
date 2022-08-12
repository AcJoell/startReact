import { useState } from "react";

const useActive = (initialState = true) => {
  const [estado, setEstado] = useState(initialState);

  const handleToggle = () => setEstado(!estado);
  const handleTrue = () => setEstado(true);
  const handleFalse = () => setEstado(false);

  return [
    estado, {
      handleToggle,
      handleTrue,
      handleFalse,
    }
  ];
};

export default useActive;
