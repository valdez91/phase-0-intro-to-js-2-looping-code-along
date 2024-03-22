// Code your solutions in this file
const writeCards = (arrName, arrGift) => {
    let  giftCard = []
    for (let i=0; i< arrName.length; i++){
        giftCard.push(`Thank you, ${arrName[i]}, for the wonderful ${arrGift} gift!`)
}
return giftCard;
}
const countDown =( generateNumber ) => {
    while ( generateNumber > 0 ) {
      console.log( generateNumber );
      generateNumber -= 1;
    }
    console.log( generateNumber );
  }