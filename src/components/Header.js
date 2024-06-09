export default function Header(props){
    return (
        <header>
        <img src= {props.reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
}