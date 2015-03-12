var React = require('react');

var TextInput = require('./TextInput.jsx');

var InputForm = React.createClass({
    handleSubmit: function() {
        this.props.handleSubmit(this.props.value);
    },
    render: function() {
        return (
            <div>
                <TextInput
                    handleChange={this.props.handleInputChange}
                    value={this.props.value}
                />
                <button type="button" onClick={this.handleSubmit} className="btn btn-default">Submit</button>
            </div>
        );
    }
});

module.exports = InputForm;
