const {sendMail}= require('../mail-service')

module.exports = {
  rentMessage(order){
    sendMail(
      `<div style="margin: 30px;">
      <div style="display: flex; justify-content: space-between; ">
        <p>WROBUD Wróbel Spółka Jawna <br> 37-100 Łańcut, ul. Mościckiego 4</p>
        <p>NIP 8151800777 Tel. 17 225 02 90 <br> <a href="https://wrobud.com.pl">www.wrobud.com.pl</a>
      </p>
      </div>
      <h2 style="text-align: center;">Umowa Najmu</h2>
      <p style="text-align: justify;">Zawarta w dniu <strong>${new Date(order.date).toLocaleDateString()}</strong> w miejscowości <strong>${order.product.localization == 1? "Łańcut":order.product.localization == 2? "Żabno":order.product.localization == 3? "Albigowa":''}</strong> pomiędzy firmą <br> WROBUD Wróbel Spółka Jawna zwana dalej Wynajmującym, a: <br>
      <strong>${order.client.name !==""? order.client.name:".............................." } ${order.client.surname !==""? order.client.surname:".............................." } ${order.client.street} ${order.client.house_number}, ${order.client.post} ${order.client.city} </strong>, nr PESEL:${order.client.pesel !==""? order.client.pesel:".............................." }, zwanym dalej Najemcą.<br> 
      Nr tel.: <strong>${order.client.phone}</strong> <br>
      Adres email: <strong>${order.client.email}</strong> 
      </p>
      <ol>
        <li>Przedmiot Umowy:
          <p><strong>Nazwa urządzenia:</strong> ${order.product.name}</p>
          <p><strong>Model:</strong> ${order.product.index}</p>
          <p><strong>Cena - roboczodniówka:</strong> ${order.product.cena_netto}zł netto / ${order.product.cena_brutto}zł brutto</p>
          <p><strong>Rabat:</strong> ${order.rabat === true? "10%": '0%'}</p>
          <p><strong>Odbiór:</strong> ${order.rentTime[0]} od godz. 7:30</p>
          <p><strong>Zwrot:</strong> ${order.rentTime[order.rentTime.length-1]} do godz. 18:00 </p>
          <p><strong>Ilość dni:</strong> ${order.rentTime.length}</p>
          <p><strong>Kwota do zapłaty:</strong> ${order.fee_netto}zł netto / ${order.fee_brutto}zł brutto</p>
       </li>
       <li>Wynajmujący ma prawo do odebrania wynajmowanego sprzętu bez powiadomienia, gdy najmujący nie dotrzyma warunków umowy.</li>
       <li>Wynajmujący pobiera kaucję od najemcy w wysokości <strong>${order.product.deposit !== 0 ? order.product.deposit : "0"  }zł</strong> na poczet należnego czynszu, ewentualnych szkód z niewłaściwego użytkowania przedmiotu najmu.</li>
       <li>Wynajmujący ma prawo do informacji o miejscu gdzie jest użytkowany i przechowywany wynajmowany przedmiot.</li>
       <li> Najemca zobowiązuje się płacić Wynajmującemu czynsz w wysokości wynikającej z przemnożenia ilości jednostek najmu i stawki za jedną jednostkę podaną w tabeli opłat.</li>
       <li> Najemca potwierdza, że wypożycza sprawny przedmiot i zobowiązuje się do korzystania z niego zgodnie z jego przeznaczeniem.</li>
       <li> Najemca zobowiązuje się do zabezpieczenia przedmiotu przed zniszczeniem i jego utratą, kradzieżą, a także odpowiada za powstałem szkody w przedmiocie najmu od chwili jego odbioru od wynajmującego do chwili zwrotu. <strong>Przedmioty wynajmowane nie są ubezpieczone od kradzieży i uszkodzeń u najemcy!</strong></li>
       <li> Najemca oznajmia, że nie będzie oddawać przedmiotu najmu w podnajem osobom trzecim.</li>
       <li> Najemca ma obowiązek oddać sprzęt sprawny, kompletny i czysty.</li>
       <li>Osoba najmująca ponosi koszty paliwa zasilającego sprzęt jak i koszty transportu.</li>
       <li>W razie zaginięcia, utraty lub zniszczenia Przedmiotu Najmu osoba najmująca jest obciążona kosztami i zobowiązana do zwrotu przedmiotu najmu niezależnie od zaistniałych okoliczności, według cen zakupu nowego sprzętu tego samego typu i marki.</li>
       <li>Wynajmujący ma prawo do naliczania odsetek w przypadku zalegania z zapłatą przez najemcę.</li>
       <li>W przypadku niewywiązania się z podpisanej umowy firma WROBUD Wróbel SPJ postępować będzie zgodnie z przepisami kodeksu cywilnego.</li>
       <li>Odpowiedzialność Wynajmującego za szkody wynikające bezpośrednio lub pośrednio z eksploatacji Przedmiotu Najmu jest wyłączona. Obsługa przedmiotu najmu może być powierzona przez Najemcę wyłącznie osobom posiadającym odpowiednie wymagane przez prawo uprawnienia, kwalifikacje i posiadającym znajomość zasad użytkowania Przedmiotu Najmu.</li>
       <li>Najemca wyraża zgodę na przetwarzanie jego danych osobowych, w tym przechowywanie dla celów realizacji umowy najmu, sprzedaży towarów i usług oraz rozliczeń finansowych. Najemca ma prawo wglądu, uzupełniania i poprawiania swoich danych osobowych. Przysługuje Pani/Panu prawo do wniesienia skargi do organu nadzorczego. Udostępnione dane nie będą podlegały udostępnianiu osobom trzecim. Odbiorcami danych będą tylko instytucje upoważnione z mocy prawa.</li>
       <li>Administratorem danych osobowych jest WROBUD Wróbel Spółka Jawna 37-100 Łańcut, ul. Mościckiego 4. Odbiorcami Pani/Pana danych osobowych będą osoby uczestniczące w realizacji oraz rozliczaniu umowy. Dane osobowe przechowywane będą przez okres 2 lat od zakończenia współpracy. Podanie danych jest dobrowolne, jednak odmowa podania danych może skutkować odmową zawarcia umowy z Wynajmującym.</li>
       
     </ol><br><br>
     <div style="display:flex; justify-content: space-around ">
      <p>..................................<br>Najemca (Klient)</p>
      <p>...........................<br>Wynajmujący</p>
     </div>
  </div>`,
  "Wypożyczalnia", `${order.client.email}`
    )
  }

  
}