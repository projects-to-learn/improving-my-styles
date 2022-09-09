/* eslint-disable import/no-unresolved */
import React, { Component } from "react";
import BasicCard from "@containers/BasicCard";

import junji from "@images/junji_00.png";
let items = ["button"];

export default class Home extends Component {
  render() {
    return (
      <div>
        <BasicCard
          title="Card title"
          imgUrl={junji}
          //imgUrl="https://images.pexels.com/photos/13235420/pexels-photo-13235420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          body="Laborum consectetur minim occaecat est."
          tags={items}
        />
      </div>
    );
  }
}
