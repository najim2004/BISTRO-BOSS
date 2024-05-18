const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="max-w-[424px] mb-12 mx-auto text-center">
      <p className="text-xl mb-4 text-[#D99904] text-center">{subtitle}</p>
      <hr className="border-[2px] border-[#E8E8E8] mb-5" />
      <h3 className="text-[40px]">{title}</h3>
      <hr className="border-[2px] border-[#E8E8E8] mt-5" />
    </div>
  );
};

export default SectionTitle;
