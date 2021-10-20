import logo from "./logo.svg";
// import "./App.css";
import { useState, useEffect } from "react";
// import "assets/css/style.css"
import Homepage from "scenes/Homepage";
import Beranda from "component/Beranda";
import Navbar from "component/Navbar";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import ManageBuku from "component/ManageBuku";

import React from "react";

function App() {
  // handleClik() {
  //   this.setState({ count: this.state.count + 1 });
  // }
  // handleClik1() {
  //   this.setState({ count: this.state.count - 1 });
  // }
  // constructor(props) {
  //   // const user = { name: "Ninja Ken", age: 14 };
  //   super(props);
  //   this.state = { count: 0 };
  // }

  function CodinganAwal() {
    return (
      // <div className="App">
      //   <header className="header-app">
      //     <p>Home</p>
      //     <p>Profil</p>
      //   </header>
      //   <header className="App-header">
      //     <h1 className="title">Halo, {this.state.count}</h1>
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <view>
      //       <button onClick={()=>{this.handleClik()}}>+</button>
      //       <button onClick={()=>{this.handleClik1()}}>-</button>
      //     {/* <button onClick={() => {this.handleClik("Guru Domba")}}>Guru Domba</button>
      //   <button onClick={() => {this.handleClik("Ninja Ken 2")}}>Ninja Ken2</button> */}
      //     </view>
      //   </header>

      //   <footer>
      //     <p>ini adalah Paragraf</p>
      //   </footer>
      // </div>
      <div></div>
    );
  }
  const category = "Sneaker";
  function Foto() {
    return (
      <div className="Foto">
        <img
          src="https://p.kindpng.com/picc/s/555-5550745_air-max-270-total-orange-best-nike-shoes.png"
          alt="Foto"
        />
      </div>
    );
  }
  function ProdukInfo(props) {
    const { category, name } = props;
    return (
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 30.000.000</p>
        <p className="Info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
      </div>
    );
  }
  function ParentBoc(params) {
    <div className="ParentBox">
      <Foto />
      <ProdukInfo name="Nike Air Jardon" category="Diskon" />
    </div>;
  }
  const [books, setBooks] = useState([]);
  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((Response) => {
        setBooks(Response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function storeData(inputBook) {
    // console.log(inputBook);
    // alert("Data Berhasil Ditambahkan");

    axios
      .post("http://localhost:4000/book/add", inputBook)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert("Data Berhasil di Tambah");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function updateData(inputBook) {
    // console.log(inputBook);
    // alert("Data Berhasil Di Update");
    axios
      .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)
      .then((res) => {
        retrieveData();
        alert("Data Berhasil di Perbaharui");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function deleteData(book) {
    // console.log(book);
    // alert("Data Berhasil Di hapus");
    axios.delete("http://localhost:4000/book/delete/" + book._id)
    .then(() => {
      retrieveData();
      alert('Data Berhasil Di hapus')
    })
    .catch((error)=>{
      console.log(error.response.data);
    })

  }

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books} />
          </Route>
          <Route path="/manajemen-buku">
            <ManageBuku
              bookList={books}
              store={storeData}
              update={updateData}
              remove={deleteData}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
