// Add "APP"
var Records = React.createClass({
  getInitialState: function() {
    // this - Constructor...
    // props:
    //   data -> array of elements which is inserterted.
    //   records -> ?
    //   state -> ? ( null )

    return ({
      records: this.props.data
    })
  },

  getDefaultProps: function() {
    // If in "react_component" we does not insert any datas - so "this.prop.data" will get it form this method.

    // [
    //  {"id":1,"title":"Record 1","date":"2015-05-27","amount":500.0,"created_at":"2015-05-27T17:36:13.002Z","updated_at":"2015-05-27T17:36:13.002Z"},
    //  {"id":2,"title":"Record 2","date":"2015-05-27","amount":-100.0,"created_at":"2015-05-27T17:36:13.031Z","updated_at":"2015-05-27T17:36:13.031Z"}
    // ]

    return ({
      data: []
    })
  },

  addRecord: function(record) {
    records = this.state.records.slice()
    records.push(record)
    this.setState({ records: records})
  },

  render: function() {
    // this -> Constructor.
    // props
    // refs
    // state:
    //   records: array of elements which is inserterted. ( from "getInitialState" )

    records = this.state.records
    return (
      // The method "return" should return instance of react component: React.DOM.div
      // when React executes a re-render, it will be performed in an optimal way
      <div className='records'>
        <h2 className='title'>Records</h2>
          <RecordForm handleNewRecord={this.addRecord} />
        <hr/>

        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>DATE</th>
              <th>TITLE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {
              records.map(function (record) {
                return (
                  <Record key={record.id} record={record} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
});
