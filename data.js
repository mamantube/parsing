class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table =
      "<table class='table table-hover  table-primary'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["NAMA", "UMUR", "DOMISILI"],
  // data: [
  //   ["Aldo", "25 Tahun", "Bekasi"],
  //   ["Budi", "27 Tahun", "Cikarang"],
  //   ["Herman", "23 Tahun", "Jakarta"],
  //   ["Junaidi", "26 Tahun", "Tangerang"],
  //   ["Stella", "25 Tahun", "Jakarta"],
  //   ["willy", "30 Tahun", "Depok"],
  //   ["Maman", "25 Tahun", "Jakarta"]
  // ]  
  data: [cek]
});

const app = document.getElementById("tabel");
  table.render(tabel);


function getData(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        return cb(JSON.parse(xhr.responseText));
      }
    };
    xhr.open("GET", url);
    xhr.send();
  }
  
  const cek = getData("https://jsonplaceholder.typicode.com/users", function(cek) {
      console.log(cek);
  });