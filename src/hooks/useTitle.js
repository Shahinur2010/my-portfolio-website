import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Shahinur's Portfolio`;
  }, [title]);
};

export default useTitle;
