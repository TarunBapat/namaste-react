class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
      </>
    );
  }
}
