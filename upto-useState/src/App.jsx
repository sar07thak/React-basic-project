import { useState } from "react";

function App() {
  const [weight , setWeight] = useState(0);
  const [height , setheight] = useState(0);
  const [message , setmsg] = useState('');
  const [BMI , setbmi] =useState(0) ;


  const calBmi = (e) => {

    e.preventDefault() ;
    let bmi = 0 ;
    if ( weight === 0 || height === 0) {
      alert("Please enter valid height and weight");
    }else{
       bmi = weight / ( height * height ) ;
      setbmi(bmi.toFixed(1)) ;
    }

    if (bmi < 18 && message==='') {
      setmsg('You are underweight');
    } else if (bmi >= 18 && bmi < 25) {
      setmsg('normal and fit ') ;
    } else if( bmi >= 25 && bmi < 30){
      setmsg('You are overweight');
    }
  }
  const handleReset = () => {
    setWeight(0);
    setbmi(0) ;
    setheight(0);
    setmsg('');
  }
  return (
    <>
      <div className=" flex justify-center items-center bg-indigo-100 h-screen ">
        <div className="border p-6 rounded-xl text-black shadow-2xl bg-white ">
          <h2 className="text-5xl font-bold mb-4">Hello BMI calc.</h2>
          <form onSubmit={calBmi} className="">
            <div>
              <p className="font-semibold text-2xl mb-1 ">Weight (kg)</p>
              <input 
              className=" bg-slate-200 w-full p-1 rounded-lg" 
              type="text" 
              placeholder="enter Weight" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <p className="font-semibold text-2xl mb-1">Height (m)</p>
              <input className=" bg-slate-200 w-full p-1 rounded-lg" type="text" placeholder="enter height" value={height} onChange={(e) => setheight(e.target.value)} />
            </div>
            <div className="text-center mt-2 mb-2">
            <h1 className="text-xl font-semibold">Your BMI is : {BMI}</h1>
            <p className="text-lg">{message}</p>
            </div>

              <button type="submit" className="border bg-blue-500 text-white w-full mb-3 rounded-lg p-2" >Submit</button>
          </form>
            <button className=" border bg-blue-500 text-white w-full rounded-lg p-2" onClick={handleReset} type="submit">Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
