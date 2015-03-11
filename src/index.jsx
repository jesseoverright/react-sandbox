var React = require('react');

var TextInput = React.createClass({
    handleChange: function(e) {
        var name = e.target.value;
        //console.log(name);
        this.props.handleChange(name);
    },
    render: function() {
        return (
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.props.value}
                    placeholder="Your name"
                />
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {
            value: ""
        };
    },
    handleChange: function (name) {
        this.setState({value:name});
    },
	render: function() {
		return (
		    <div className="container">
		        <div className="row">
		            <div className="col-md-8 col-md-offset-2">
		                <h2>Hello, {this.state.value}</h2>
		                <TextInput
                            handleChange={this.handleChange}
                            value={this.state.value}
                        />
		            </div>
		        </div>
		    </div>
		);
	}
});

React.render(
  <App />,
  document.getElementById('main')
);
