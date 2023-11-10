import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsonline] = useState(true);
  useEffect(() => {

    window.addEventListener("offline", () => {
      setIsonline(false);
    });

    window.addEventListener("online", () => {
      setIsonline(true);
    });
    
  }, []);
  return isOnline;
};
export default useOnlineStatus;
