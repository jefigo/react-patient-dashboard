
window.utils = {
    //format date dd/mm/yyyy
    formatDate: function(date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var FormattedDate = new Date(date);
        var day = FormattedDate.getDate();
        var monthIndex = FormattedDate.getMonth();
        var year = FormattedDate.getFullYear();
        return( day + '/' +  monthNames[monthIndex] + '/' + year );
    }
}
