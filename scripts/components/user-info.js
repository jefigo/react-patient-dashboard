// Profile component to show the user's name and avatar
var UserInfo = React.createClass({
    render: function() {
       return(
           <div>
               <h3>Welcome {this.props.user.name}!</h3>
               <img src={this.props.user.avatar_url} width="80"/>
            </div>
        );
    }
});