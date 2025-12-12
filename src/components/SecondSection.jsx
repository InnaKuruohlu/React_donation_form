import { useState } from "react";

import "../secondSection.css";
import Card from "./Card";

import BackHandIcon from '@mui/icons-material/BackHand';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function SecondSection () {
   const [selectedType, setSelectedType] = useState("");

  return <>
  <section className="second-section">
    <div className="main-container-support">

      <div className="containerForTitles">
        <h2 className="titleKindsOfSupports">Види допомоги</h2>
        <p className="titleHelp">Ви можете змінити вид допомоги</p>
      </div>

      <div className="container-buttons">
        <div className="support-container">
          <button 
          className={
            selectedType === "make" ? "support-button active" : "support-button"
          } 
          data-target="make" 
          aria-pressed={selectedType === "make"} 
          aria-label="Зробити"
          onClick={() => setSelectedType("make")}
          onTouchEnd={(e) => {
            e.preventDefault();
           
            setSelectedType("make");}}
          >
          <BackHandIcon className="handIcon" />
          </button>
          <p className={
            selectedType === "make" ? "text-support-button active" : "text-support-button"
          } >Зробити</p>
        </div>

        <div className="support-container">
          <button 
          className={
            selectedType === "card" ? "support-button active" : "support-button"
          } 
          data-target="card" 
          aria-pressed={selectedType === "card"} 
          aria-label="Фінансова допомога"
          onClick={() => setSelectedType("card")}
          onTouchEnd={(e) => {
            e.preventDefault();
           
            setSelectedType("card");
          }}
          >
            <AccountBalanceWalletIcon  className="walletIcon"/>
          </button>
          <p className={
            selectedType === "card" ? "text-support-button active" : "text-support-button"
          }>Фінансова <br />допомога</p>
        </div>

        <div className="support-container">
          <button 
          className={
            selectedType === "material" ? "support-button active" : "support-button"  
          }
          data-target="material" 
          aria-pressed={selectedType === "material"} 
          aria-label="Матеріальна допомога"
          onClick={() => setSelectedType("material")}
          onTouchEnd={(e) => {
            e.preventDefault();
            
            setSelectedType("material");}}
          >
            <ion-icon name="shirt-outline" className="shirtIcon"></ion-icon>
          </button>
          <p className={
            selectedType === "material" ? "text-support-button active" : "text-support-button"
          }>Матерільна <br />допомога</p>
        </div>

        <div className="support-container">
          <button 
          className={
            selectedType === "volunteer" ? "support-button active" : "support-button"
          } 
          data-target="volunteer" 
          aria-pressed={selectedType === "volunteer"} 
          aria-label="Волонтерство"
          onClick={() => setSelectedType("volunteer")}
          onTouchEnd={(e) => {
            e.preventDefault();
        
            setSelectedType("volunteer");}}
          >
            <FavoriteBorderIcon className="heartIcon"/>
          </button>
          <p className={
            selectedType === "volunteer" ? "text-support-button active" : "text-support-button"
          }>Волонтерство</p>
        </div>
      </div>

      <Card selectedType={selectedType} />

      <div class="container-buttonHelp"><button class="buttonHelp">Допомогти</button></div>

    </div>
  </section>
  </>;
}

export default SecondSection;