import './App.css';
import moment from "moment";

function App() {
  let monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let birthDate2 = new Date();
  let birthdayDate = new Date(2003,2,15,14,25,10,500);
  let birthDate1 = new Date(1237864530);
  let birthDate3 = new Date("01-01-2023");

  console.log(birthdayDate.setFullYear(2002));
  console.log(birthdayDate.setMonth(10));
  console.log(birthdayDate.setDate(12));
  console.log(birthdayDate.setHours(20));
  console.log(birthdayDate.setMinutes(30));
  console.log(birthdayDate.setSeconds(55));
  console.log(birthdayDate.setMilliseconds(100000000));

  console.log(birthDate2);
  console.log(birthDate2.getFullYear());
  console.log(monthArr[birthDate2.getMonth()]);
  console.log(birthDate2.getDate());
  console.log(daysArr[birthDate2.getDay()]);
  console.log(birthDate2.getHours());
  console.log(birthDate2.getMinutes());
  console.log(birthDate2.getSeconds());
  console.log(birthDate2.getMilliseconds());
  console.log(birthDate2.getTime());

  console.log(birthdayDate);
  console.log(birthdayDate.getFullYear());
  console.log(monthArr[birthdayDate.getMonth()]);
  console.log(birthdayDate.getDate());
  console.log(daysArr[birthdayDate.getDay()]);
  console.log(birthdayDate.getHours());
  console.log(birthdayDate.getMinutes());
  console.log(birthdayDate.getSeconds());
  console.log(birthdayDate.getMilliseconds());
  console.log(birthdayDate.getTime());

  console.log(birthDate1);
  console.log(birthDate1.getFullYear());
  console.log(monthArr[birthDate1.getMonth()]);
  console.log(birthDate1.getDate());
  console.log(daysArr[birthDate1.getDay()]);
  console.log(birthDate1.getHours());
  console.log(birthDate1.getMinutes());
  console.log(birthDate1.getSeconds());
  console.log(birthDate1.getMilliseconds());
  console.log(birthDate1.getTime());

  console.log(birthDate3);
  return (
    <div className="App">
      <h1>Date Class and Moment Js</h1>
      <hr></hr>
      <div>
        <form>
          <label>Course Start Date:</label>
          <input type="datetime-local" 
          onChange={(eventObj)=>{
            let selectDate = new Date(eventObj.target.value);
            console.log(selectDate.getFullYear());
            console.log(monthArr[selectDate.getMonth()]);
            console.log(selectDate.getDate());
            console.log(daysArr[selectDate.getDay()]);
            console.log(selectDate.getHours());
            console.log(selectDate.getMinutes());
            console.log(selectDate.getSeconds());
            console.log(selectDate.getMilliseconds());
            console.log(selectDate.getTime());

            let courseDurationMS = 120*24*60*60*1000;
            let courseEndDateMS = selectDate.getTime()+courseDurationMS;
            let courseEndDate = new Date(courseEndDateMS);
            console.log(courseEndDate);

            let selectDate1 = new Date(eventObj.target.value);
            moment(selectDate1).add(10, 'days').calendar();
          }}></input>
          <div>
            <label>Moment:</label>
            <input type="datetime-local" 
            onChange={()=>{
              console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
            }}></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
