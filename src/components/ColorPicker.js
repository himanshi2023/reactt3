import React, { Component } from 'react';
import '../App.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorList: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      showColorList: !prevState.showColorList,
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      showColorList: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { showColorList, selectedColor } = this.state;

    const selectedColorStyle = {
      backgroundColor: selectedColor,
      color: '#fff',
      padding: '5px',
      marginTop: '10px',
    };

    return (
      <div style={{marginTop:"350px",marginLeft:"100px"}}>
      <center>
        <h1>Color picker</h1>
        <button onClick={this.toggleColorList} style={{height:"30px",width:"100px",backgroundColor:"navy",color:"white",boder:"none"}}>Pick a color</button>
        {showColorList && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <p style={selectedColorStyle}>Selected Color: {selectedColor}</p>
        )}
        </center>
      </div>
    );
  }
}

export default ColorPicker;

