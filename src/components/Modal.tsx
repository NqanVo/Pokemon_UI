import React from "react";

interface Props {
  children: any;
  modal: boolean;
}

const Modal = (props: Props) => {
  const { children, modal } = props;

  return (
    <>
      {modal && (
        <div
          className={`fixed w-11/12 md:w-10/12 xl:2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 z-20 overflow-hidden rounded-3xl`}
        >
          {children}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#000000]/100 via-[#150050]/80 to-[#3F0071]/80 blur-md -z-10"></div>
        </div>
      )}
    </>
  );
};

export default React.memo(Modal);
