var appointmentsData = [
    {
        "created_at" : "2015-04-21T10:44:51-06:00",
        "end" : "2015-04-24T07:30:00-07:00",
        "id" : 695,
        "patient_id" : 16,
        "physician_id" : 14,
        "start" : "2015-04-24T07:00:00-06:00",
        "updated_at" : "2015-04-21T10:44:51-06:00",
        "patient_name" :"Jesus Figueroa",
        "physician_name" : "Gregory House"
    },
    {
        "created_at" : "2015-04-21T10:44:51-06:00",
        "end" : "2015-04-24T07:30:00-07:00",
        "id" : 695,
        "patient_id" : 16,
        "physician_id" : 14,
        "start" : "2015-04-24T07:00:00-06:00",
        "updated_at" : "2015-04-21T10:44:51-06:00",
        "patient_name" :"Jesus Figueroa",
        "physician_name" : "Gregory House"
    }
];

// Appoinment date component to render a formatted date
var AppointmentDate = React.createClass({
    formatDate: function() {
        return window.utils.formatDate(this.props.date);
    },
    render: function() {
        return(
            <th>{this.formatDate()}</th>
        );
    }
});

var  Appointment = React.createClass({
    render: function() {
        return(
            <tr>
                <th>{this.props.appointment.physician_name}</th>
                <th> 6:00 am -  7:00 am</th>
                <AppointmentDate date={this.props.appointment.start}/>
            </tr>
        );
    }
});

var  Appointments = React.createClass({
    render: function() {
        var appointments = appointmentsData.map(function(appointment){
            return( <Appointment appointment={appointment}/>);
        });
        return(
            <div className="col-md-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Physician name</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments}
                    </tbody>
                </table>
            </div>
        );
    }
});
