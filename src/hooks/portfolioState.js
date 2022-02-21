import { useState } from "react";

const portfolioState = () => {
  const [viewSelect, setViewSelect] = useState(null);
  return { viewSelect, setViewSelect };
};

export default portfolioState;
