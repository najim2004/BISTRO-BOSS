import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const SectionBanner = ({ img, title }) => {
  return (
    <div className=" mb-12">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero min-h-[550px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">Would you like to try a dish?</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

SectionBanner.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionBanner;
