import { useState, useRef } from "react";

import LanguageIcon from '@mui/icons-material/Language';
import TerminalIcon from '@mui/icons-material/Terminal';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function Card({ selectedType }) {
 const [selectedPay, setSelectedPay] = useState("");
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();
  const card4 = useRef();
  const card5 = useRef();
  const card6 = useRef();
 
  const expRef = useRef();
  const cvcRef = useRef();

  function handleAutoJump(e, nextRef) {
  if (e.target.value.length === e.target.maxLength) {
    nextRef?.current?.focus();
  }
}

 function validateMMYY(value) {
  return /^\d{2}\/\d{2}$/.test(value);
}


  function validateCVC(value) {
    return /^\d{3}$/.test(value);
}

  return <>
   <div 
      id="card"
      className={
        selectedType === "card" ? "containerOfPaying active" : "containerOfPaying"
      } 
     >
        <span className="triangle" aria-hidden="true"></span>
        <div className="containerOptionsOfPaying">
          <p className="titlePaying">Спосіб оплати</p>

          <div className="container-cards">

            <div className={
              selectedPay === "visa" ? "container-card active" : "container-card"
            }
              tabindex={0}
              role="button"
              aria-selected={selectedPay === "visa"}
              aria-label="Карта Visa або MasterCard"
              data-pay="visa"
              onClick={() => setSelectedPay("visa")}
              >
              <div className="container-splitmatUI">
                <span></span>
                <span><CreditCardIcon className="cerditCardIcon"/> </span>
              </div>
              <p>Карта Visa/MasterCard</p>
            </div>

            <div className={
              selectedPay === "privat" ? "container-card active" : "container-card"
            }
            tabindex={0}
            role="button"
            aria-selected={selectedPay === "privat"}
            aria-label="Приват24"
            data-pay="privat"
            onClick={() => setSelectedPay("privat")}
            >
              <h3>Приват24</h3>
              <p>Приват24</p>
            </div>

            <div className={
              selectedPay === "terminal" ? "container-card active" : "container-card"
            }
              tabindex={0}
              role="button"
              aria-selected={selectedPay === "terminal"}
              aria-label="Tермінал України"
              data-pay="terminal"
              onClick={() => setSelectedPay("terminal")}
            >
              <span><TerminalIcon className="terminalIcon"/> </span>
              <p>Термінал України</p>
            </div>

            <div className={
              selectedPay === "webmoney" ? "container-card active" : "container-card"
            }
              tabindex={0}
              role="button"
              aria-selected={selectedPay === "webmoney"}
              aria-label="WebMoney"
              data-pay="webmoney"
              onClick={() => setSelectedPay("webmoney")}
            >
              <div className="container-splitmatUI">
                <p className="webmoneytitle">WebMoney</p>
                <span><LanguageIcon className="webIcon" /></span>
              </div>
              <p>WebMoney</p>
            </div>

            <div className={
              selectedPay === "paypal" ? "container-card active" : "container-card"
            }
              tabindex={0}
              role="button"
              aria-selected={selectedPay === "paypal"}
              aria-label="PayPal"
              data-pay="paypal"
              onClick={() => setSelectedPay("paypal")}
            >
              <span><ion-icon name="logo-paypal" className="payPallIcon"></ion-icon></span>
              <p>PayPal</p>
            </div>

          </div>
        </div>



        <div className="containerOfData">
        <p className="titleOfData">Введіть наступні данні</p>

        <div>
          <form className="container-dataCard">
            <div className="containerNumberCard">
              <label className="labelDataCard">Номер карти</label>
              <div className="containerInputCard">
                <input
                ref={card1} 
                className="inputCard" 
                type="text" 
                maxlength={4} 
                inputmode="numeric" 
                aria-label="Перші 4 цифри" 
                title="Введіть перші 4 цифри" 
                onChange={(e) => handleAutoJump(e, card2)}
                required 
                />

                <input
                ref={card2} 
                className="inputCard" 
                type="text" 
                maxlength={4} 
                inputmode="numeric" 
                aria-label="Наступні 4 цифри" 
                title="Введіть наступні 4 цифри" 
                onChange={(e) => handleAutoJump(e, card3)}
                required 
                />

                <input
                ref={card3} 
                className="inputCard" 
                type="text" 
                maxlength={4} 
                inputmode="numeric" 
                aria-label="Треті 4 цифри" 
                title="Введіть треті 4 цифри" 
                onChange={(e) => handleAutoJump(e, card4)}
                required 
                />

                <input
                ref={card4} 
                className="inputCard" 
                type="text" 
                maxlength={4} 
                inputmode="numeric" 
                aria-label="Останні 4 цифри" 
                title="Введіть останні 4 цифри"
                onChange={(e) => handleAutoJump(e, card5)} 
                required />
              </div>
            </div>

            <div className="containerSecondNumberCard">
              <div className="NumberCard">
                <label className="labelDataCard">Термін дії</label>
                <input
                ref={(element) => {
                  card5.current = element;
                  expRef.current = element;
                }}
                className="inputSecondData" 
                type="text" 
                maxlength={5} 
                title="MM/YY" 
                aria-label="Термін дії картки"
                onChange={(e) => {
                  const value = e.target.value;

                if (value.length === 5) {
                  if (!validateMMYY(value)) {
                    e.target.classList.add("error");
                    
                  } else {
                    e.target.classList.remove("error");
                    card6.current?.focus();
                  }
                }
              }}
                required />
              </div>

              <div className="NumberCard">
                <label className="labelDataCard">CVC/CVV</label>
                <input
                ref={(element) => {
                  card6.current = element;
                  cvcRef.current = element;
                }}
                className="inputSecondData" 
                type="text" 
                maxlength={3} 
                inputmode="numeric" 
                aria-label="Код безпеки CVC або CVV" 
                title="Введіть код безпеки CVC або CVV"
                onChange={(e) => {
                if (!validateCVC(e.target.value)) {
                  e.target.classList.add("error");
                } else {
                  e.target.classList.remove("error");
                }
              }} 
              required />
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
  </>
}

export default Card;