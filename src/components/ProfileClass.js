import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userinfo: {},
    };
  }
  async componentDidMount() {
    // https://api.github.com/users/tarunbapat
    const resp = await fetch("https://api.github.com/users/tarunbapat");
    const data = await resp.json();

    this.setState({
      count: 1,
      userinfo: data,
    });

    console.log("component mounted");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }
  render() {
    console.log("userInfo in render ", this.state.userinfo);
    return (
      <>
        <h2>{this.props.name}</h2>
        <p>{this.state.userinfo.login}</p>
        <button>{this.state.count} </button>
      </>
    );
  }
}

export default ProfileClass;
