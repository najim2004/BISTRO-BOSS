import { Helmet } from "react-helmet-async";

const useHelmet = (title) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default useHelmet;
