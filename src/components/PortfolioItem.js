import React from "react";
import "./PortfolioItem.css";

export default class PortfolioItem extends React.Component {
  render() {
    let gridPos = {
      gridColumn: this.props.colPos,
      gridRow: this.props.rowPos,
    };

    let className = "portfolio-item";
    if (this.props.small) {
      className += " portfolio-item-small";
    } else {
      className += " portfolio-item-large";
    }
    return (
      <div className={className} style={gridPos}>
        <img src={this.props.img}></img>
        <div className="text-container">
          <h1>{this.props.title}</h1>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}
