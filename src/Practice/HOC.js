import React from "react";
import useMousePosition from "./useMousePosition";

class ClassComponent extends React.Component {
  render() {
    
    const { x, y } = this.props;

    return (
      <div>
        Current Mouse Position: ({x}, {y})
      </div>
    );
  }
}

function WrapperComponent() {
  
  const { x, y } = useMousePosition();

  return <ClassComponent x={x} y={y} />;
}

export default WrapperComponent;
