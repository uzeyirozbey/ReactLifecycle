import React,{Component} from "react";
class Child extends Component {
    
  constructor(props) {
    super();
    console.log("child contructor çalşıtı");
    this.state = {
      name: "React"
    }
  }

  //sanal domdan real doma aktarılmadan hemen önce çalışan fonksiyonlardır.
  componentWillMount(){
    console.log("child componentwillmount çalıştı");
  }
  //sonradan bir data çekilirse  bu fonksiyon kullanılabilir.
  componentDidMount() {
    console.log("child componentDidMount çalıştı");
  }

  componentWillReceiveProps(nextProps) { // Legacy
      console.log("componentWillReceiveProps",nextProps );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> child component </h1>
        </header>
      </div>
    )
  }
}
export default Child;