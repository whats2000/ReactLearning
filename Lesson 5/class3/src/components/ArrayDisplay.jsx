import PropTypes from "prop-types";

function ArrayDisplay(props) {
  return (
    <div>
      <h3>Array Display</h3>
      <ul>
          {
            props.array.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
      </ul>
    </div>
  );
}

// Add props validation here
// More info: https://reactjs.org/docs/typechecking-with-proptypes.html
ArrayDisplay.propTypes = {
  array: PropTypes.array.isRequired
};

// Add default props here
// More info: https://reactjs.org/docs/react-component.html#defaultprops
ArrayDisplay.defaultProps = {
  array: [1, 2, 3, 4, 5]
};

export default ArrayDisplay;
