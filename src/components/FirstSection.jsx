import {useState} from "react";
import "../firstSection.css";

function FirstSection () {
  const [selectedType, setSelectedType] = useState("physical");

  return <>
  <section className="first-section">
    <div className="main-container-fillOut-form">

      <h2 className="fill-outForm">Заповніть форму</h2>

      <div className="containerForButtons">
        <button 
        className={
          selectedType === "physical" ? "button-physicalPerson " : "button-physicalPerson active"
        }
        onClick={() => setSelectedType("physical")}
        onTouchEnd={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedType("physical");
      }}
            >
          Фіз. особа
          </button>
        <button 
        className={
          selectedType === "legal" ? "button-legalPerson active" : "button-legalPerson"
        }
        onClick={() => setSelectedType("legal")}
        onTouchEnd={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedType("legal");
      }}
        >Юр. особа</button>
      </div>

      <div className="container-fillOut-form">
        <div className="first-fillOut-form">
          <form>
            <div className="container-name">
              <div className="conatiner-fname">
              <label className="label-style" for="fname">Ім'я</label>
              <input
              className="input-style"
              type="text"
              id="fname"
              name="fname"
              maxlength="40"
              title="Будь ласка, введіть своє ім'я."
              aria-describedby="fname-help"
              required />
              <span id="fname-help" className="visually-hidden">Будь ласка, введіть своє ім'я.</span>  
              </div>

              <div className="container-lname">  
              <label className="label-style" for="lname">Фамілія</label>
              <input
              className="input-style"
              type="text"
              id="lname"
              name="lname"
              maxlength="40"
              title="Будь ласка, введіть свою фамілію."
              aria-describedby="lname-help"
              required />
              <span id="lname-help" className="visually-hidden">Будь ласка, введіть свою фамілію.</span>  
              </div>
            </div>

            <div className="container-companyName">
              <label className="label-style" for="companyName">Назва компанії, організації</label>
                <input 
                className="input-style"
                type="text"
                name="companyName"
                id="companyName"
                title="Будь ласка, введіть назву компанії."
                aria-describedby="company-help"
                required />
                <span id="company-help" className="visually-hidden">Будь ласка, введіть назву компанії.</span>  
                <button className="button-logo">+ Логотип</button>
            </div>

            <div className="container-email">
              <label className="label-style" for="user-email">Email-адрес</label>
              <input
              type="email"
              className="input-style email"
              name="user-email"
              id="user-email"
              maxlength="40"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}"
              title="Формат: (name@example.com)"
              aria-describedby="email-help"
              required />
              <span id="email-help" className="visually-hidden">Будь ласка, введіть email-адресу. Формат: (name@example.com).</span>
            </div>

            <div className="container-phoneNumber">
              <label className="label-style" for="user-phone">Номер телефону</label>
              <input
              className="input-style"
              type="tel" 
              name="user-phone" 
              id="user-phone" 
              maxlength="40"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" 
              title="Формат: (+XXX-XX-XXX-XX-XX)"
              aria-describedby="telephone-help"
              required />
              <span id="telephone-help" className="visually-hidden">Будь ласка, введіть номер телефону. Формат: (+XXX-XX-XXX-XX-XX).</span>
            </div>
          </form>
        </div>

        <div className="second-fillOut-form">
          <form>
            <div className="container-country">
              <label className="label-style" for="countryName">Країна</label>
              <input
              type="text"
              name="countryName"
              id="countryName"
              className="input-style"
              maxlength="40"
              title="Будь ласка, введіть назву країни."
              aria-describedby="country-help"
              required />
              <span id="country-help" className="visually-hidden">Будь ласка, введіть назву країни.</span>
            </div>

            <div className="container-city-state">
              <div className="container-city">
                <label className="label-style" for="cityName">Місто</label>
              <input
              type="text"
              name="cityName"
              id="cityName"
              maxlength="40"
              title="Будь ласка, введіть назву міста."
              className="input-style"
              aria-describedby="city-help"
              required />
              <span id="city-help" class="visually-hidden">Будь ласка, введіть назву міста.</span>
              </div>
              
              <div className="container-state">
                <label className="label-style" for="stateName">Штат, район</label>
              <input
              type="text"
              name="stateName"
              id="stateName"
              maxlength="40"
              title="Будь ласка, введіть назву штату/району."
              className="input-style"
              aria-describedby="state-help"
              required />
              <span id="state-help" className="visually-hidden">Будь ласка, введіть назву штату/району.</span>
              </div>
            </div>

            <div className="container-address">
              <label className="label-style" for="address">Адреса</label>
              <input
              type="text"
              name="address"
              id="address"
              maxlength="40"
              className="input-style"
              title="Будь ласка, введіть свою адресу."
              aria-describedby="address-help"
              required />
              <span id="address-help" className="visually-hidden">Будь ласка, введіть свою адресу.</span>
            </div>

            <div className="conatiner-postIndex">
              <label className="label-style" for="postCode">Поштовий індекс</label>
              <input
              type="text"
              name="postCode"
              id="postCode"
              className="input-style"
              pattern="[0-9]{5}" 
              title="Будь ласка, введіть 5-значний поштовий індекс."
              aria-describedby="post-help"
              required />
              <span id="post-help" className="visually-hidden">Будь ласка, введіть 5-значний поштовий індекс.</span>
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>

  </>;
}

export default FirstSection;