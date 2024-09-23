const Button = ({ text }) => {
  return (
    <button className="font-bold bg-light-button-primary hover:bg-light-button-primaryHover dark:bg-dark-button-primary dark:hover:bg-dark-button-primaryHover p-2 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
      {text || "Sample Button.jsx"}
    </button>
  );
};

export default Button;
