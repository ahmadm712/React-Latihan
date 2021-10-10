import React from "react";

function ManageBuku({ bookList }) {
  console.log(bookList);
  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>
      <div id="formTambah">
        <h5>Tambah Buku</h5>
        <form className="form-rows">
          <div className="col-3">
            <input type="text" name='judul' className='form-control mx-2' placeholder='Judul'/>
          </div>
          <div className="col-3">
            <input type="text" name='pengarang' className='form-control mx-2' placeholder='Pengarang'/>
          </div>
          <div className="col-2">
            <input type="text" name='harga' className='form-control mx-2' placeholder='Harga'/>
          </div>
          <div className="col-2">
            <input type="number" name='stok' className='form-control mx-2' placeholder='Stok'/>
          </div>
          <div className="col-2">
            <input type="submit" className='btn btn-primary ml-5' value='Simpan'/>
          </div>
        </form>
      </div>
      <div id="formUbah"></div>
      <div id="daftarBuku">
        <h2 className="mt-3">Daftar Buku</h2>
        <hr />
        <button className="btn btn-primary m-2">Tambah Buku</button>
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
                <td>
                  <button className="btn btn-info mr-3">Edit</button>
                  <button className="btn btn-danger">Hapus</button>
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
