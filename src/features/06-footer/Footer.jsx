import { useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-custom-bgFooter sticky z-50 bottom-0">
      <div className=" container mx-auto py-[14.3px]">
        <h3 className="text-center font-semibold text-custom-textFooterHeader ">
          Copyright &copy; {year}. All rights are reserved.
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
