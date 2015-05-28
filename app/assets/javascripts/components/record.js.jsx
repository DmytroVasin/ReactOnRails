var Record = React.createClass({

  handleDelete: function(e){
    e.preventDefault()

    $.ajax({
      type: 'DELETE',
      url: '/records/'+this.props.record.id,
      // success: this.addRecord,
      success: $.proxy(function(){
        this.props.handleDeleteRecord(this.props.record)
      }, this),
      dataType: 'json'
    });
  },

  render: function() {
    return (
      <tr>
        <td>{ this.props.record.date }</td>
        <td>{ this.props.record.title }</td>
        <td>{ amountFormat( this.props.record.amount ) }</td>
        <td>
          <a className='btn btn-danger' onClick={ this.handleDelete }>Delete</a>
        </td>
      </tr>
    );
  }
});
