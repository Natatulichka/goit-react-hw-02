// import PropTypes from "prop-types";
import css from "./Description.module.css";
const Description = ({ children }) => {
  return (
    <div className={css.descriptionContainer}>
      <h1 className={css.descriptionTitle}>Sip Happens Café</h1>
      <p className={css.descriptionParagraf}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      {children}
    </div>
  );
};
// Description.prototype = {
//   descriptionTitle: PropTypes.string,
//   descriptionParagraf: PropTypes.string,
// };
export default Description;
