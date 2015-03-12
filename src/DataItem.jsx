var React = require('react');

var DataItem = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.value}</td>
            </tr>
        );
    }
});

module.exports = DataItem;
