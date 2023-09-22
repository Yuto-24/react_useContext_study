import { useContext } from "react";
import { UserContext } from "../Providers/UserProvide";

export const ChildArea = () => {
  const context = useContext(UserContext);
  console.log(context);

  return (
    <div>
      <p>子コンポーネント</p>
    </div>
  );
};
