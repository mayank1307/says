import React, { Component } from "react";
import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient
} from "mongodb-stitch-browser-sdk";
class Dataserver extends Component {
    constructor() {
      super();
      this.state = {
        datas: [],
        value: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.displaydatas = this.displaydatas.bind(this);
      this.adddata = this.adddata.bind(this);
    }
    
    componentDidMount() {
      // Initialize the App Client
      this.client = Stitch.initializeDefaultAppClient("syldata-uexzd");
          // Get a MongoDB Service Client
    // This is used for logging in and communicating with Stitch
    const mongodb = this.client.getServiceClient(
        RemoteMongoClient.factory,
        "mongodb-atlas"
      );
        // Get a reference to the data database
    this.db = mongodb.db("syllabus");
    this.displaydatasOnLoad();
  }
  
  displaydatas() {
    // query the remote DB and update the component state
    this.db
      .collection("syl")
      .find({}, { limit: 1000 })
      .asArray()
      .then(datas => {
        this.setState({datas});
      });
   }
  displaydatasOnLoad() {
    // Anonymously log in and display comments on load
    this.client.auth
      .loginWithCredential(new AnonymousCredential())
      .then(this.displaydatas)
      .catch(console.error);
  }
  adddata(event) {
    event.preventDefault();
    const { value } = this.state;
    // insert the data into the remote Stitch DB
    // then re-query the DB and display the new datas
    this.db
      .collection("syl")
      .insertOne({
        owner_id: this.client.auth.user.id,
        value: value
      })
      .then(this.displaydatas)
      .catch(console.error);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
render() {
    return (
      <div className="Dataserver">
        <h3>This is a data app</h3>
        <hr />
        <p>Add a data Item:</p>
        <form onSubmit={this.adddata}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {/* Map over the datas from our remote DB */}
          {this.state.datas.map(data => {
            return <li className="text-dark">{data.value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Dataserver;