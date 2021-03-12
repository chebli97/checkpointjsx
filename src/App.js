import imageInSrc from './imageInSrc.png';
import './style.css';

function App() {
  return (
  <div className="App">
            <section style={{border:"solid 1px black", maxWidth:"100vw"}}>

            <h1 className="title red">.Saif Chebli.</h1>

            <br />

            <img className="robot" src={imageInSrc} alt="robot"/>


            <img className="robot" src="/imageInPublic.png" alt="robot" />

            </section>
            <video width="320" height="260" controls >

            <source src="./myVideo.mp4" type="video/mp4" />

            </video>
   </div>
  );
}

export default App;
