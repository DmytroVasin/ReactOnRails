// WTF?! using window?
this.amountFormat = function(amount){
  return (
    '$ ' + Number(amount).toLocaleString()
  )
}
