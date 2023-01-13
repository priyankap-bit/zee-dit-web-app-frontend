import React from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: "Consumer Journey Charters",
    children: [
      {
        name: "Acquisition ",
        children: [
          {
            name: "Total Sessions"
          },
          {
            name: "DAU"
          },
          {
            name: "MAU"
          },
          {
            name: "Paid User"
          },
          {
            name: "Organic User"
          }
        ]
      },
      {
        name: "Discovery",
        children: [
          {
            name: "FullAWSAccess"
          }
        ]
      },
      {
        name: "Advertisement",
        children: [
          {
            name: "FullAWSAccess"
          }
        ]
      },
      {
        name: "Subscription",
        children: [
          {
            name: "FullAWSAccess"
          }
        ]
      },
      {
        name: "Engagement",
        children: [
          {
            name: "FullAWSAccess"
          }
        ]
      },
 
    
    
   
    ]
  }
];

const containerStyles = {
  width: "100%",
  height: "100vh"
};

export default class CenteredTree extends React.PureComponent {
  state = {};

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={(tc) => (this.treeContainer = tc)}>
        <Tree
          data={debugData}
          translate={this.state.translate}
          orientation={"vertical"}
        />
      </div>
    );
  }
}
