// import PropTypes from 'prop-types';

const Title = ({ text1, text2, show_line=true }) => {

  let line = '';
  if (show_line) {
    line = <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 "></p>
  }

  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-[#0ac0ac]">
        {text1} <span className="text-black font-medium">{text2}</span>
      </p>
      {line}
    </div>
  );
};

// Title.propTypes = {
//   text1: PropTypes.string,
//   text2: PropTypes.string,
// };
export default Title;
