import { useState } from "react";

import "../secondSection.css";
import Card from "./Card";

import BackHandIcon from '@mui/icons-material/BackHand';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function SecondSection () {
   const [selectedType, setSelectedType] = useState("");

   let touchStartY = 0;
   let isScrolling = false;

   const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
    isScrolling = false;
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;

    if (Math.abs(currentY - touchStartY) > 10) {
      isScrolling = true;
    }
  };

  const handleContainerClick = (value) => {
    if (isScrolling) return;
    setSelectedType(value);
  };

  return <>
  <section className="second-section">
    <div className="main-container-support">

      <div className="containerForTitles">
        <h2 className="titleKindsOfSupports">Види допомоги</h2>
        <p className="titleHelp">Ви можете змінити вид допомоги</p>
      </div>

      <div className="container-buttons">
        <div className="support-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
          onClick={() => setSelectedType("make")}
        >
          <button 
          className={
            selectedType === "make" ? "support-button active" : "support-button"
          } 
          data-target="make" 
          aria-pressed={selectedType === "make"} 
          aria-label="Зробити"
         /* onClick={() => setSelectedType("make")}*/
          type="button"
          >
          <BackHandIcon className="handIcon" />
          </button>
          <p className={
            selectedType === "make" ? "text-support-button active" : "text-support-button"
          } >Зробити</p>
        </div>

        <div className="support-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onClick={() => setSelectedType("card")}
        >
          <button 
          className={
            selectedType === "card" ? "support-button active" : "support-button"
          } 
          data-target="card" 
          aria-pressed={selectedType === "card"} 
          aria-label="Фінансова допомога"
          /*nClick={() => setSelectedType("card")}*/
          >
            <AccountBalanceWalletIcon  className="walletIcon"/>
          </button>
          <p className={
            selectedType === "card" ? "text-support-button active" : "text-support-button"
          }>Фінансова <br />допомога</p>
        </div>

        <div className="support-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onClick={() => setSelectedType("material")}
        >
          <button 
          className={
            selectedType === "material" ? "support-button active" : "support-button"  
          }
          data-target="material" 
          aria-pressed={selectedType === "material"} 
          aria-label="Матеріальна допомога"
          /*onClick={() => setSelectedType("material")}*/
          >
            <ion-icon name="shirt-outline" className="shirtIcon"></ion-icon>
          </button>
          <p className={
            selectedType === "material" ? "text-support-button active" : "text-support-button"
          }>Матерільна <br />допомога</p>
        </div>

        <div className="support-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onClick={() => setSelectedType("volunteer")}
        >
          <button 
          className={
            selectedType === "volunteer" ? "support-button active" : "support-button"
          } 
          data-target="volunteer" 
          aria-pressed={selectedType === "volunteer"} 
          aria-label="Волонтерство"
          /*onClick={() => setSelectedType("volunteer")}*/
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