var React = require('react');

var DataItem = require('./DataItem.jsx');

var DataTable = React.createClass({
    render: function() {
        var data = this.props.data.map(function (data) {
            return <DataItem value={data} />
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        );
    }
});

module.exports = DataTable;
