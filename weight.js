let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('date').value;
    row.insertCell(1).innerHTML = document.getElementById('ticketNum').value;
    row.insertCell(2).innerHTML = document.getElementById('driver').value;
    row.insertCell(3).innerHTML = document.getElementById('truckId').value;
    row.insertCell(4).innerHTML = document.getElementById('gross').value;
    row.insertCell(5).innerHTML = document.getElementById('tare').value;
    row.insertCell(6).innerHTML = document.getElementById('gross').value - document.getElementById('tare').value;
    row.insertCell(7).innerHTML = (document.getElementById('gross').value - document.getElementById('tare').value)/2000;
    row.insertCell(8).innerHTML = document.getElementById('bale').value;
    
    document.getElementById('date').value = '';
    document.getElementById('ticketNum').value = '';
    document.getElementById('driver').value = '';
    document.getElementById('truckId').value = '';
    document.getElementById('gross').value = '';
    document.getElementById('tare').value = '';
    document.getElementById('bale').value = '';
});


