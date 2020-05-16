const createTable = data => {
  const table = document.getElementById("table");
  const tbHead = table.insertRow(0)
  
  data.forEach((line, i) => {
    if (i === 0) {
      Object.keys(line).forEach((key, i) => {
        const tbCell = tbHead.insertCell(i)
        tbCell.innerHTML = key
      })
    }
    
    const table = document.getElementById("table");
    const row = table.insertRow(i + 1);
    const cellsCount = Object.keys(line).length
    
    for(let i = 0; i < cellsCount; i++) {
      const cell = row.insertCell(i)
      cell.innerHTML = Object.values(line)[i]
    }
  })
}

const init = async () => {
  const response = await fetch('http://localhost:5000/api/users')
  const data = await response.json()
  createTable(data)
}

document.addEventListener('DOMContentLoaded', init)