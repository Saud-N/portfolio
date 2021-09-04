import React from "react";
import "./PortfolioItemIntro.css";

export default class PortfolioItemIntro extends React.Component {
  render() {
    let gridPos = {
      gridColumn: this.props.colPos,
      gridRow: this.props.rowPos,
    };
    
    return (
      <div style={gridPos} className='portfolio-item-intro'>
        <h1>{this.props.content}</h1>
      </div>
    );
  }
}
