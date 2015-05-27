// Should we write "this.Records" ?

Records = React.createClass({
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
    // WTF - does not work!
    // Cannot read property 'records' of null

    // [
    //  {"id":1,"title":"Record 1","date":"2015-05-27","amount":500.0,"created_at":"2015-05-27T17:36:13.002Z","updated_at":"2015-05-27T17:36:13.002Z"},
    //  {"id":2,"title":"Record 2","date":"2015-05-27","amount":-100.0,"created_at":"2015-05-27T17:36:13.031Z","updated_at":"2015-05-27T17:36:13.031Z"}
    // ]

    return ({
      records: []
    })
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
                  React.createElement(Record, {
                    key: record.id,
                    record: record
                  })
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
});
