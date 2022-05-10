import * as React from "react"
import { useState } from "react"

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const GetInTouchForm = () => {
  const [fName, setfName] = useState('');
  const [showfName, setShowfName] = useState('d-none');
  const [lName, setlName] = useState('');
  const [showlName, setShowlName] = useState('d-none');
  const [phone, setPhone] = useState('');
  const [showPhone, setShowPhone] = useState('d-none');
  const [email, setEmail] = useState('');
  const [showeMail, setShoweMail] = useState('d-none');
  const [stateName, setStateName] = useState('');
  const [areaHelp, setareaHelp] = useState('');
  const [about, setAbout] = useState('');
  const [showSuccess, setShowSuccess] = useState('d-none');
  const [showBtn, setShowBtn] = useState('d-block');
  let ch = 0;
  const sendemail = (e) => {
    e.preventDefault();
    if (fName.trim() !== "" && lName.trim() !== "" && re.test(email) && phoneno.test(phone) && ch === 0) {
      ch = 1;
      const recipeUrl = 'https://growingcolossus.com/mackaygoodwin/wp-json/mackey/v1/contact-sendemail ';
      const postBody = {
        "first-name": fName,
        "surname": lName,
        "email": email,
        "mobile": phone,
        "state": stateName,
        "area-help": areaHelp,
        "about-situation": about
      };

      const requestMetadata = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
      };

      fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(recipes => {
          ch = 0;
          setShowSuccess('d-block');
          setShowBtn('d-none');
        });
    }
  }

  return (
    <form method="post" action="https://login.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" >
      <select name="Status" style={{ display: "none" }} title="Lead Status">
        <option value="New Web Form">New Web Form</option>
      </select>
      <input id="00N9D000002HWTG" name="00N9D000002HWTG" size="20" type="hidden" />
      <input id="company" maxLength="40" name="company" size="20" type="hidden" value='mackaygoodwin' />
      <input type="hidden" name="oid" value="00D9D0000008gaJ" />
      <input type="hidden" name="retURL" value="https://www.mackaygoodwin.com.au/thank-you/" />

      <ul>
      <li>
      <input type="text" name="first-name" placeholder="First Name" className="firstName" required onChange={(e) => { setfName(e.target.value); e.target.value.trim() !== "" ? setShowfName('d-none') : setShowfName('d-block') }} />
      <div className={"alert alert-danger " + showfName} style={fName.trim() !== "" ? { display: "none" } : {}} role="alert">Please enter first name.</div>
      </li>
      <li>
      <input type="text" name="surname" placeholder="Surname" className="surName" required onChange={(e) => { setlName(e.target.value); e.target.value.trim() !== "" ? setShowlName('d-none') : setShowlName('d-block') }} />
      <div className={"alert alert-danger " + showlName} style={lName.trim() !== "" ? { display: "none" } : {}} role="alert">Please enter last name.</div>
      </li>
      <li>
      <input type="email" name="email" placeholder="Email address" required onChange={(e) => { setEmail(e.target.value); e.target.value.trim() !== "" && re.test(e.target.value) ? setShoweMail('d-none') : setShoweMail('d-block') }} />
      <div className={"alert alert-danger " + showeMail} style={email.trim() !== "" && re.test(email) ? { display: "none" } : {}} role="alert">Please enter valid email address.</div>
      </li>
      <li>
      <input type="phone" name="mobile" placeholder="Mobile Number" required onChange={(e) => { setPhone(e.target.value); e.target.value.trim() !== "" && phoneno.test(e.target.value) ? setShowPhone('d-none') : setShowPhone('d-block') }} />
      <div className={"alert alert-danger " + showPhone} style={phone !== "" && phoneno.test(phone) ? { display: "none" } : {}} role="alert">Please enter valid phone.</div>
      </li>
      <li>
      <select id="00N9D000002QFLX" placeholder="State" className="stateSelect" name="state" onChange={e => setStateName(e.target.value)}>
        <option value="">State</option>
        <option value="NSW">NSW</option>
        <option value="VIC">VIC</option>
        <option value="QLD">QLD</option>
        <option value="ACT">ACT</option>
        <option value="NT">NT</option>
        <option value="WA">WA</option>
        <option value="TAS">TAS</option>
      </select>
      </li>
      <li>
      <select name="area-help" className="areaSelect" onChange={e => setareaHelp(e.target.value)}>
        <option value="">What area do you need help with?</option>
        <option value="I need help with closing my company/liquidation">I need help with closing my company/liquidation</option>
        <option value="I need help with managing my company's debt or cash flow">I need help with managing my company's debt or cash flow</option>
        <option value="I need help with restructuring ">I need help with restructuring </option>
        <option value="I am not sure what I need">I am not sure what I need</option>
      </select>
      </li>
      <li>
      <label htmlFor="tell-us" name="about-situation"> Tell us about your situation</label>
      <textarea name="tell-us" col="10" placeholder="Tell us here..." onChange={e => setAbout(e.target.value)}></textarea>
      </li>
      <li>
      <button type="submit" className={"btn btn-primary " + showBtn}>Send</button>
      </li>
      </ul>
      <div className={"alert alert-success " + showSuccess} role="alert">Thank you for providing the details, we have received it and one of our consultants will be in touch shortly</div>
      <select style={{ display: "none" }} id="lead_source" name="lead_source">
        <option value="Web Form">Web Form</option>
      </select><br />
      <select style={{ display: "none" }} id="00N9D000002PlGo" name="00N9D000002PlGo" title="Lead Type Source">
        <option value="MG">MG</option>
      </select>
      <input id="00N9D000002P5S5" maxLength="255" name="00N9D000002P5S5" size="20" type="hidden" />
      <input id="00N9D000002P5SA" maxLength="255" name="00N9D000002P5SA" size="20" type="hidden" />
      <input id="00N9D000002P5SF" maxLength="255" name="00N9D000002P5SF" size="20" type="hidden" />
      <input id="00N9D000002Pe9F" maxLength="255" name="00N9D000002Pe9F" size="20" type="hidden" />
      <input id="00N9D000002HWSI" maxLength="255" name="00N9D000002HWSI" size="20" type="hidden" />
      {/* <input type="hidden" name="debug" value="1" />
      <input type="hidden" name="debugEmail" value="aqib160492@gmail.com" /> */}
      <textarea style={{ display: "none" }} id="00N9D000002HWRA" name="00N9D000002HWRA" rows="3" type="text" type="hidden" wrap="soft"></textarea>
      <textarea style={{ display: "none" }} id="00N9D000002P0Yi" name="00N9D000002P0Yi" type="hidden" wrap="soft"></textarea>
      <li style={{ display: "none" }}>
        <label htmlFor="comment">Do Not Fill This Out</label>
        <textarea name="comment" id="comment" rows="1" cols="1"></textarea>
        <input type="hidden" id="idstamp" name="idstamp" value="AdmfPXWsLlXnkKsF4I86dZRLcwlp3A3wQSIi4z4ehm8=" />
      </li>
    </form>
  )
}
export default GetInTouchForm
