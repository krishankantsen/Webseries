
import './App.css'
function Card(wname) {
  console.log(wname);
  return (
    <><div className='cards'>
      <img src={wname.imgsrc} className='image' />
      <h1>{wname.sname}</h1>
      <h2>{wname.title}</h2>
      <a href={wname.link} target="_blank"><button>Watch Now</button></a>
      </div>
    </>
  );
  
}
export default Card;