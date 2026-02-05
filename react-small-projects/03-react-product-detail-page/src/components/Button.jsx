const Button = ({ icon, text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#2185d5] hover:bg-[#0096ff] font-semibold px-6 py-3 rounded-lg transition cursor-pointer ${className}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
