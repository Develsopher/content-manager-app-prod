import Navbar from "components/Navbar";
import ActiveResource from "./ActiveResource";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ActiveResource />
      {children}
    </>
  );
};

export default Layout;
