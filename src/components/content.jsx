function Contents(props) {
    return (
      <>
        <div className="one">
          <div className="imgcontent">
            {/* Use the imported image */}
            <img src={props.image} alt="one" />
            <div className="span">
              {/* Use parentheses to implicitly return JSX */}
              {props.span.map((spanlist, index) => (
                <span key={index}>{spanlist}</span>
              ))}
            </div>
          </div>
          <h3>{props.designation}</h3>
          <ul>
            {props.ul.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="two">
          <ol>
            {props.ol.map((list2, index) => (
              <li key={index}>{list2}</li>
            ))}
          </ol>
        </div>
      </>
    );
  }
export default Contents