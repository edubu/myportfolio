import AppHeader from "../shared/AppHeader";
import AppFooter from "../shared/AppFooter";
import PagesMetaHead from "../PagesMetaHead";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead title="Elliot Dubuque" />
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
