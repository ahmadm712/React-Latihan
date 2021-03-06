import { React, useState } from "react";

function ManageBuku({ bookList, store,update,remove }) {
  const [inputBook, setInputBook] = useState();
  const [form, setForm] = useState();



  function handleJudul(event) {
    setInputBook({ ...inputBook, judul: event.target.value });
  }
  function handlePengarang(event) {
    setInputBook({ ...inputBook, pengarang: event.target.value });
  }
  function handleHarga(event) {
    setInputBook({ ...inputBook, harga: event.target.value });
  }
  function handleStok(event) {
    setInputBook({ ...inputBook, stok: event.target.value });
  }

  // Function Submit
  function submitAdd(event) {
    event.preventDefault();
    store(inputBook);
  }

  function submitChange(event) {
    event.preventDefault();
    update(inputBook)
    setForm('')
    
  }

  // Function Delete
  function deleteBook(book) {
    remove(book)
  }


  function showCreate() {
    setForm("create");
  }

  function showEdit(book) {
    setInputBook(book);
    setForm("edit");
  }

  console.log(bookList);
  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>
      {/* Awal Form Tambah */}
      {form === "create" && (
        <div id="formTambah">
          <h5>Tambah Buku</h5>
          <form className="form-rows" onSubmit={submitAdd}>
            <div className="col-3">
              <input
                type="text"
                name="judul"
                className="form-control mx-2 mt-2"
                placeholder="Judul"
                onChange={handleJudul}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="pengarang"
                className="form-control mx-2 mt-2"
                placeholder="Pengarang"
                onChange={handlePengarang}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="harga"
                className="form-control mx-2 mt-2"
                placeholder="Harga"
                onChange={handleHarga}
              />
            </div>
            <div className="col-3">
              <input
                type="number"
                name="stok"
                className="form-control mx-2 mt-2"
                placeholder="Stok"
                onChange={handleStok}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary mx-2 mt-3"
                value="Simpan"
              />
            </div>
          </form>
        </div>
      )}

      {/* Akhir Form Tambah */}

      {/* Awal Form Edit */}
      {form === 'edit' && (
      <div id="formUbah">
        <h5>Ubah Buku</h5>
        <hr />
        <form className="form-row" onSubmit={submitChange}>
          <div className="col-3">
            <input
              type="text"
              name="judul"
              className="form-control mx-2 mt-2"
              placeholder="Judul"
              onChange={handleJudul}
              value={inputBook.judul}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              name="pengarang"
              className="form-control mx-2 mt-2"
              placeholder="Pengarang"
              onChange={handlePengarang}
              value={inputBook.pengarang}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              name="harga"
              className="form-control mx-2 mt-2"
              placeholder="Harga"
              onChange={handleHarga}
              value={inputBook.harga}
            />
          </div>
          <div className="col-3">
            <input
              type="number"
              name="stok"
              className="form-control mx-2 mt-2"
              placeholder="Stok"
              onChange={handleStok}
              value={inputBook.stok}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-warning mx-2 mt-3"
              value="Ubah"
            />
          </div>
        </form>
      </div>

      )}
      {/* Akhir Form Edit */}

      <div id="daftarBuku">
        <h2 className="mt-3">Daftar Buku</h2>
        <hr />
        <button className="btn btn-primary m-2" onClick={showCreate}>
          Tambah Buku
        </button>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.judul}</td>
                <td>{book.pengarang}</td>
                <td>{book.harga}</td>
                <td>{book.stok}</td>
                <td className="mr-4">
                  <button
                    className="btn btn-info mr-3"
                    onClick={() => showEdit(book)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={()=>deleteBook(book)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBuku;
