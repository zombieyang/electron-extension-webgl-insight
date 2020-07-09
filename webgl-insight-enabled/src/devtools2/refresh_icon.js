define(["messages"], function (Messages) {
    var RefreshIcon = React.createClass({
        getInitialState: function() {
          return {
            color: '#000'
          }
        },

        sendContexts: function() {
          this.setState({
            color: '#484848'
          });
          setTimeout(function() {this.setState({color: '#000'})}.bind(this), 100)
          Messages.sendMessage(null, messageType.GET_CONTEXTS, null)
        },

        render: function() {
            var color = this.state.color;
            return (
                <svg fill={color} className="refresh-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" role="img" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid" width="24px" height="24px" onClick={this.sendContexts}>
                    <path d="M416,352l96-111.9h-64.7c-2.3-27.9-10.5-54-23.5-77.3c-27.4-49.2-75.8-85.1-133-95.6c-0.7-0.1-1.5-0.3-2.2-0.4  c-0.5-0.1-0.9-0.2-1.4-0.2C277.1,64.9,266.6,64,256,64c-0.1,0-0.3,0-0.4,0c0,0,0,0,0,0c-90.9,0.2-167,63.6-186.7,148.6  c0,0,0,0.1,0,0.1c-0.3,1.1-0.5,2.2-0.7,3.3c-0.1,0.5-0.2,0.9-0.3,1.4c-0.1,0.7-0.3,1.4-0.4,2.1c-0.2,0.9-0.3,1.7-0.5,2.6  c-0.1,0.4-0.1,0.7-0.2,1.1c-0.2,1.2-0.4,2.4-0.6,3.6c0,0.1,0,0.1,0,0.2c-1,6.3-1.6,12.7-1.9,19.1c0,0.3,0,0.6,0,0.8  c-0.1,1.4-0.1,2.7-0.2,4.1c0,1.6-0.1,3.3-0.1,5c0,1.7,0,3.3,0.1,5c0,1.4,0.1,2.7,0.2,4.1c0,0.3,0,0.6,0,0.9c0.3,6.5,1,12.9,1.9,19.1  c0,0.1,0,0.1,0,0.2c0.2,1.2,0.4,2.4,0.6,3.6c0.1,0.4,0.1,0.7,0.2,1.1c0.2,0.9,0.3,1.8,0.5,2.6c0.1,0.7,0.3,1.4,0.4,2.1  c0.1,0.5,0.2,1,0.3,1.4c0.2,1.1,0.5,2.2,0.7,3.2c0,0,0,0.1,0,0.1c19.7,85,96.1,148.4,187.1,148.6c42.9-0.1,83.1-14.2,116.9-40.7  l7.5-5.9l-43.2-46.2l-6.2,4.6c-22.1,16.3-47.5,24.2-75,24.2c-70.6,0-128-57-128-128c0-71,57.4-128,128-128  c66.4,0,122.8,46.6,129.5,112H312L416,352z"/>
                </svg>
            )
        }
    });
    return RefreshIcon;
});
