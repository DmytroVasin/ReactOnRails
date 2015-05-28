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

  deleteRecord: function(record){
    records = this.state.records.slice();
    index = records.indexOf(record);
    records.splice(index, 1);

    // difference between setState and replaceState is that the first one will only update one key of the state object,
    // the second - will completely override the current state of the component with whatever new object we send.
    this.replaceState({ records: records });
  },

  // Calculate sum of positive amounts.
  credits: function(){
    var credits;
    credits = this.state.records.filter(function(val) {
      return val.amount >= 0;
    });

    return (
      credits.reduce((function(prev, curr) {
        return prev + parseFloat(curr.amount);
      }), 0)
    )
  },

  // Calculate sum of negative amounts.
  debits: function(){
    var credits;
    credits = this.state.records.filter(function(val) {
      return val.amount < 0;
    });

    return (
      credits.reduce((function(prev, curr) {
        return prev + parseFloat(curr.amount);
      }), 0)
    )
  },

  balance: function(){
    return ( this.debits() + this.credits() )
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

        <div className='row'>
          <AmountBox type='success' amount={ this.credits() } text='Credit'/>
          <AmountBox type='danger' amount={ this.debits() } text='Debit'/>
          <AmountBox type='info' amount={ this.balance() } text='Balance'/>
        </div>

        <RecordForm handleNewRecord={ this.addRecord } />
        <hr/>

        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Dates</th>
              <th>Titles</th>
              <th>Amounts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              records.map(function (record) {
                return (
                  <Record key={record.id} record={record} handleDeleteRecord={this.deleteRecord} />
                )
              }, this) // Dont FORGOT send THIS!
            }
          </tbody>
        </table>
      </div>
    );
  }
});
