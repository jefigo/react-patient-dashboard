var NavbarLinksData = [
    { text: 'Home', url: '#' },
    { text: 'New appointment', url: '#' },
    { text: 'Cancel appointment', url: '#'},
]

var NavbarLink = React.createClass({
    render: function() {
        return (
            <li><a href={this.props.url}>{this.props.text}</a></li>
        );
    }
});

var Navbar = React.createClass({
    render: function() {
        navbarLinks = NavbarLinksData.map(function(link){
            return( <NavbarLink url={link.url} text={link.text}/>);
        });
        return(
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    {navbarLinks}
                </ul>
            </nav>
        );
    }
});
