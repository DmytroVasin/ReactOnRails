var RecordForm = React.createClass({
  getInitialState: function(){
    return (
      {
        title: '',
        date: '',
        amount: ''
      }
    )
  },

  valid: function(){
    return (
      this.state.title && this.state.date && this.state.amount
    )
  },

  handleChange: function(e){
    var newProps = {};
    newProps[e.target.name] = e.target.value;
    this.setState(newProps);
  },

  // addRecord: function(data){
  //   this.props.handleNewRecord(data)
  // },

  handleSubmit: function(e){
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/records',
      data: { record: this.state }, // "params" will be: {"record"=>{"title"=>"...", ... }
      // success: this.addRecord,
      success: $.proxy(function(data){
        this.props.handleNewRecord(data) // Our current component sends data(record) back to the parent component
        this.setState( this.getInitialState() )
      }, this),
      dataType: 'json'
    });
  },

  render: function(){
    // this.state ->
    //   amount: ''
    //   date: ''
    //   title: ''
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Date' name='date'
                  value={this.state.date} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Title' name='title'
                 value={this.state.title} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <input type='number' className='form-control' placeholder='Amount' name='amount'
                 value={this.state.amount} onChange={this.handleChange} />
        </div>
        <button type='submit' className='btn btn-primary'
                disabled={!this.valid()}>Create record</button>
      </form>
    )
  }
});
