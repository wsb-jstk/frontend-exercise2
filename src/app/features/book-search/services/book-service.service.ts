import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  getBooks(): Book[]{
    return [
      {
          "id": 1,
          "title": "Pakiet Hyperion. Tomy 1-4: Hyperion, Upadek Hyperiona, Endymion, Triumf Endymiona",
          "author": "Dan Simmons",
          "price": 143.74,
          "publisher": "MAG",
          "category": "Science fiction",
          "description": "Hyperion. Tom 1 W obliczu zbliżającej się nieuchronnie międzygalaktycznej wojny na planetę Hyperion przybywa siedmioro pielgrzymów: Kapłan, Żołnierz, Uczony, Poeta, Kapitan, Detektyw i Konsul. Mają za zadanie dotrzeć do mitycznych grobowców, by znaleźć w nich budzącą grozę istotę. Zna ona być może metodę, która pozwoli zapobiec zagładzie całej ludzkości. Każdy z pielgrzymów może przedstawić jej swoją prośbę, lecz wysłuchany zostanie tylko jeden. Pozostali będą musieli zginąć. /n Upadek Hyperiona. Hyperion. Tom 2 Tajemnicze Grobowce Czasu otwierają się. W rękach Dzierzby, który się z nich wynurzył, może spoczywać los całego rodzaju ludzkiego. Wygnańcy przypuścili szturm na Hegemonię Człowieka. Stworzone przez nas Sztuczne Inteligencje obróciły się przeciwko nam w próbie zbudowania Najwyższego Intelektu: Boga. Boga Maszyn. Jego powstanie może oznaczać unicestwienie ludzkości. Za sprawą nieznanych sił losy Hegemonii, Wygnańców, SI i całego wszechświata splatają się wokół Dzierzby. Oto wspaniała wizja przyszłości, w której wysoko rozwinięta technika miesza się z pradawnymi religiami, odkrycia naukowe łączą się z ponadczasową tajemnicą, a niezrównana ekstaza płynnie przechodzi w obezwładniającą zgrozę./n Endymion. Hyperion. Tom 3 Kontynuacja bestsellerowego Hyperiona. Mija prawie trzysta lat od upadku Hegemonii. Większością planet rządzi Kościół katolicki i jego zbrojne ramię - organizacja Pax. Istnieje jednak śmiertelne zagrożenie dla nowej władzy. Jest nim Enea, jedenastoletnia córka Brawne Lamii i Johny′ego, która ma stać się nowym mesjaszem ludzkości. Ścigani przez wszechwładny Pax dziewczynka i jej ochroniarz Raul Endymion przemierzają czas i przestrzeń, by w końcu trafić na Ziemię ukrytą poza naszą galaktyką przez tajemniczą siłę.../n Triumf Endymiona. Hyperion. Tom 4 Kontynuacja \"Hyperiona\", \"Upadku Hyperiona\", i \"Endymiona\". Od upadku Hegemonii większością planet rządzi Kościół katolicki wraz z tajemną organizacją Pax. Okazuje się jednak, że nowej władzy zagraża Enea, która ma się stać nowym mesjaszem ludzkości. Ścigani przez wszechwładny Pax dziewczynka i jej ochroniarz Raul Endymion przemierzają czas i przestrzeń, by w końcu trafić na Ziemię ukrytą poza naszą galaktyką przez tajemniczą siłę...",
          "availability": 10,
          "cover_image":"https://cf-taniaksiazka.statiki.pl/images/large/00B/ZEST_HYPERION.jpg"
        },    {
          "id": 2,
          "title": "Między piekłem, a powodzią. Szósty rewolwer. Tom 8",
          "price": 60.03,
          "publication_year": 2022,
          "publisher": "Timof i cisi wspólnicy",
          "category": "Comic book",
          "description": "Stała się rzecz niewyobrażalna! Szóstka - znów przeklętych rewolwerów umożliwiających posiadaczowi zniszczenie i odbudowanie rzeczywistości - wpada w ręce Griseldy. Szarej Wiedźmy, i jej pośrednika, Jesupa Suttera.",
          "availability": 2,
          "cover_image":"https://cf-taniaksiazka.statiki.pl/images/large/E7B/9788366347571.jpg"
        },
        {
          "id": 3,
          "title": "Arsene Lupin: Wyspa trzydziestu trumien",
          "author": "Maurice Leblanc",
          "price": 26.18,
          "publication_year": 2022,
          "publisher": "CM",
          "category": "Crime stories and sensation",
          "description": "Akcja powieści toczy się we Francji w 1917 roku, w czasie I wojny światowej. Bohaterką opowieści jest Véronique d'Hergemont. Czternaście lat wcześniej, w 1903 roku, jej ojciec, profesor Antoine d'Hergemont, porwał jej dziecko, a ona otrzymała potem wiadomość, że oboje utopili się w morzu. Była to zemsta jej ojca za małżeństwo Véronique z hrabią Vorskim, niby Polakiem z pochodzenia. Podczas oglądania pewnego filmu, Véronique zauważa swój podpis z dzieciństwa \"V d'H\" tajemniczo wypisany na ścianie chaty w tle sceny. Jej wizyta w miejscu kręcenia filmu pogłębia tajemnicę, ale również dostarcza dalszych wskazówek, które kierują ją w stronę dawno zaginionych krewnych i kolejnych zagadek. Znajduje ona proroctwo: \"Cztery kobiety na krzyżu, kamień Boga, który daje życie lub śmierć. Trzydzieści ofiar na trzydzieści trumien\". Kiedy Véronique przybywa na wyspę Sarek, przepowiednia się spełnia. Wielu ludzi umiera straszliwą śmiercią, dokładnie tak, jak w przepowiedni. Véronique musi stawić sama czoła nadprzyrodzonym siłom. Wydaje się, że rozwiązanie tajemnicy wyspy Sarek będzie wymagało usług pewnego szczególnego człowieka...",
          "availability": 19,
          "cover_image":"https://cf-taniaksiazka.statiki.pl/images/large/288/9788366704954.jpg"
        },
        {
          "id": 4,
          "title": "Urządzenie Centauryjskie",
          "author": "M. John Harrison",
          "price": 24.66,
          "publication_year": 2022,
          "publisher": "MAG",
          "category": "Science fiction",
          "description": "Handlował narkotykami, gdy mógł je dostać, a kiedy ich nie było, przewoził inne towary. W rzeczywistości był jednak ostatnim z Centauryjczyków - choć tylko półkrwi - i w związku z tym jedyną osobą zdolną uruchomić Urządzenie Centauryjskie, rozumną bombę, która mogła być kluczem do rozstrzygnięcia okrutnej kosmicznej wojny. Klasyczna powieść M. Johna Harrisona stawia na głowie konwencje space opery i jest napisana i precyzją oraz talentem, z jakich zasłynął.",
          "availability": 6,
          "cover_image":"https://cf-taniaksiazka.statiki.pl/images/large/CF9/9788367023153.jpg"
        }
 
];
  }
}