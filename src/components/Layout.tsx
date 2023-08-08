import { ReactNode } from "react";
import Cronos1 from "../assets/img/Cronos1.png";
type LayoutProps = {
  children: ReactNode;
};
export const Layout = (props: LayoutProps) => {
  return (
    <>
      <div className="w-[100%] min-h-screen overflow-hidden">
        <div className="w-full h-30 flex justify-start">
          <img className="mt-10 ml-20 h-20 w-auto" src={Cronos1} />
        </div>
        <div className="w-[100%] h-[40rem]">{props.children}</div>
      </div>
    </>
  );
};
