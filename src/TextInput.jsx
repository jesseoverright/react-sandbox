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

module.exports = TextInput;
