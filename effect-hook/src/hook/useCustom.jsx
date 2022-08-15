import { useState } from "react";

const useCustom = () => {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);

  const handleToggle = () => setToggle(!toggle);
  const handleCount = () => setCount(count + 1);

  return [toggle, count, { handleToggle, handleCount }];
};

export { useCustom };
