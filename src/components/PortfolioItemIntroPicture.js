import React from "react";
import "./PortfolioItemIntroPicture.css";

export default class PortfolioItemIntroPicure extends React.Component {
  render() {
    let gridPos = {
      gridColumn: this.props.colPos,
      gridRow: this.props.rowPos,
    };
    
    return (
      <div className='portfolio-item-intro-picture' style={gridPos}>
        <img src={this.props.img}></img>
      </div>
    );
  }
}
