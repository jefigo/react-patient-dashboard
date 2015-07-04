
var PatientDashboard = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        var component = this;
        $.get('/data/user_data.json', function(data){
            component.setState(data.user);
        });
    },
    render: function() {
        return (
            <div>
                <Navbar />
                <UserInfo user={this.state}/>
                <Appointments />
            </div>
        );
    }
});
