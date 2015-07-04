
var PatientDashboard = React.createClass({
    getInitialState: function() {
        return { user: {} };
    },
    componentDidMount: function() {
        var component = this;
        $.get('/data/user_data.json', function(data){
            component.setState({ user: data.user});
        });
    },
    render: function() {
        return (
            <div>
                <Navbar />
                <UserInfo user={this.state.user}/>
                <Appointments />
            </div>
        );
    }
});
