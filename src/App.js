
import './App.css';
import React, { Component } from 'react';
import Child from './Child';
class App extends Component {

  constructor(props) {
    super();
    console.log("contructor çalşıtı");
    this.state = {
      name: "React",
      tl : 0
    }
  }

  //sanal domdan real doma aktarılmadan hemen önce çalışan fonksiyonlardır.
  componentWillMount(){
    console.log("componentwillmount çalıştı");
  }
  //sonradan bir data çekilirse  bu fonksiyon kullanılabilir.
  componentDidMount() {
    console.log("componentDidMount çalıştı");
    setTimeout(() => {
      this.setState({
       name : "React ..."
      })
    },2000);
  }
 changeName = () =>{
   this.setState({
     name: "değişti"
   })
 }

 changeTl = (e) => {
  this.setState({
    tl : e.target.value
  })
 }
 ////////////////////////////////////////////////////
 //React'ta hayat kurtaran fonksiyonlar
 //fonksiyonun ya da işlemin render edip etmemesine karar veren fonksiyon
 //aldığı parametreler güncellenmiş propsları ve stateleri bize döndürür. biz de ona işlem yaptırırız.
 shouldComponentUpdate(nextProps,nextState){
   //10 nun katı değilse render etme
    return (nextState.tl % 10) === 0;
 }
 //component güncellenecek haberin olsun . :-) yukarıya bağlı çalşıyor
 //Render işleminden önce çalışıyor
 componentWillUpdate(nextProps,nextState){
   console.log("componentWillUpdate çalıştı.");
 }
 //Render işleminden sonra çalışır
 componentDidUpdate(prevProps,prevState) {
   console.log("componentDidUpdate çalşıtı", prevProps, prevState);
 }
 ///////////////////////////////////////////////////////

  render() {
    console.log("Render");
    return (
      <div className="App">
        <header className="App-header">
          <h1> {this.state.name} </h1>
          <Child name={this.state.name}/>
          <button onClick={this.changeName}> Değiştir </button>
        </header>
      <input name="tl" id="tl" onChange= {this.changeTl}/>
      <br></br>
      Her elma 10Tl. <br/>
      {this.state.tl /10} tane elma alabilirsinizi.
      </div>
    )
  }
}

export default App;
