var React = require('react');

var InputForm = require('./InputForm.jsx');
var DataTable = require('./DataTable.jsx');

var App = React.createClass({
    getInitialState: function() {
        return {
            name: "",
            data: []
        };
    },
    handleInputChange: function (value) {
        this.setState({
            name:value
        });
    },
    handleSubmit: function (value) {
        this.setState({
            data: this.state.data.concat(value)
        });
    },
	render: function() {
		return (
		    <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <h2>Hello, {this.state.name}</h2>
                    </div>
                </div>
		        <div className="row">
		            <div className="col-md-8 col-md-offset-2">
                        <InputForm
                            handleInputChange={this.handleInputChange}
                            handleSubmit={this.handleSubmit}
                            value={this.state.name}
                        />
		            </div>
		        </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <DataTable data={this.state.data} />
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
