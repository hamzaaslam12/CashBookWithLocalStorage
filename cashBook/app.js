
// save data to local storage
function saveData() {

  var title = document.getElementById('title').value
  var amount = document.getElementById('amount').value
  var nature = document.getElementsByName('nature');
  var nature_value;

  for (var i = 0; i < nature.length; i++) {

    if (nature[i].checked) {

      nature_value = nature[i].value;
      // console.log(nature_value)
    }
  }

  if(title && amount && nature_value){
    // console.log(title, amount, nature_value)
  
  var transaction = {
        title: title,
        amount: amount,
        nature: nature_value
  }
// console.log(transaction)

  var id = new Date()
      id = id.getMilliseconds()
    // console.log('id ', id)
  
      localStorage.setItem(id , JSON.stringify(transaction));
  // console.log(`title ${title} amount ${amount} nature ${nature_value}`)
        location.reload()
}
else{alert('PLEASE FILL THE FIELDS!')}

}

// get data from local storage
function getData() {

// iterate localStorage
for (var i = 0; i < localStorage.length; i++) {

  // set iteration key name
  var key = localStorage.key(i);

  // use key name to retrieve the corresponding value
  var value = JSON.parse(localStorage.getItem(key));

  // console.log('Key: ' + key + ', Value: ' + value.title);  
      // console.log(value.nature)

      if(value.nature == 'Dr'){

        var td3 = document.createElement('td');
        var tdNature = document.createTextNode(value.nature)
        td3.appendChild(tdNature)
        var td5 = document.createElement('td');

      }
      else {
        var td3 = document.createElement('td');
        var td5 = document.createElement('td');
        var tdNature = document.createTextNode(value.nature)
        td5.appendChild(tdNature)

      }
  var tBody = document.getElementById('data');
  var tr = document.createElement('tr');

  var td1 = document.createElement('td');
  var td2 = document.createElement('td');

  var td4 = document.createElement('td');
  var tdTitle = document.createTextNode(value.title)
  var tdAmount = document.createTextNode(value.amount)
  
  var delBtn = document.createElement("button")
  var delText = document.createTextNode("Delete")
  delBtn.setAttribute('onclick', 'delItem(this)')
  delBtn.setAttribute('class', 'delBtn')
  delBtn.appendChild(delText)

  // APPEND TO LI
  td1.appendChild(tdTitle)
  td2.appendChild(tdAmount)

  td4.appendChild(delBtn)

  td1.setAttribute('colspan', '2')
  td2.setAttribute('colspan', '2')
  tr.setAttribute('id', key)
  
  // APPEND TO tr
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td5)

  tr.appendChild(td4)

  tBody.appendChild(tr)
}

}
setTimeout(getData, 1000)

// delete item
function delItem(id){

  var key = id.parentNode.parentNode.id
  // console.log(key)
  
  localStorage.removeItem(key)
  id.parentNode.parentNode.remove()
}

function delAllItem(){
  localStorage.clear()
  var tBody = document.getElementById('data');
  tBody.innerHTML = ''
}
