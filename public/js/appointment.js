var mfid=getCookie('mfid');
showName();
setUrl();



function showName(){
  var name_master=sessionStorage.getItem('employer_name');
  var service_data=sessionStorage.getItem('service_data');
  document.getElementById('masterName').innerHTML=`${name_master}&nbsp`;
  document.getElementById('service_data').innerHTML=`${service_data}`
}

function setUrl(){
    var first_url=document.getElementById('employers');
    var second_url=document.getElementById('confirm');
    first_url.setAttribute('href',`/${mfid}/employers`);
    second_url.setAttribute('href',`/${mfid}/confirm`);
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


function remove(){
  var cards = document.querySelectorAll('.timeSquare');
  cards.forEach(card=>{
      card.remove();
  });
  
}

const getMonth=(month)=>{
  if(month=="Сентябрь"){
      return '09'
  }
  if(month=="Октябрь"){
      return '10'
  }
  if(month=="Ноябрь"){
      return '11'
  }
  if(month=="Декабрь"){
      return '12'
  }
  if(month=="Январь"){
      return '01'
  }
  if(month=="Февраль"){
      return '02'
  }
  if(month=="Март"){
      return '03'
  }
  if(month=="Апрель"){
      return '04'
  }
  if(month=="Май"){
      return '05'
  }
  if(month=="Июнь"){
      return '06'
  }
  if(month=="Июль"){
      return '07'
  }
  if(month=="Август"){
      return '08'
  }
  
}
  
  



$(".timeSquare").click(function () {
  $(".timeSquare").removeClass('timeSquarePicked')
  $(this).addClass('timeSquarePicked')
});
function CalendarControl() {
  let save;

  const calendar = new Date();
  const calendarControl = {
    localDate: new Date(),
    prevMonthLastDate: null,
    calWeekDays: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
    calMonthName: [
      "Январь",
      "Февраль",
      "март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ],
    daysInMonth: function (month, year) {
      return new Date(year, month, 0).getDate();
    },
    firstDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
    },
    lastDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
    },
    firstDayNumber: function () {
      return calendarControl.firstDay().getDay() + 1;
    },
    lastDayNumber: function () {
      return calendarControl.lastDay().getDay() + 1;
    },
    getPreviousMonthLastDate: function () {
      let lastDate = new Date(
        calendar.getFullYear(),
        calendar.getMonth(),
        0
      ).getDate();
      return lastDate;
    },
    navigateToPreviousMonth: function () {
      calendar.setMonth(calendar.getMonth() - 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToNextMonth: function () {
      calendar.setMonth(calendar.getMonth() + 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToCurrentMonth: function () {
      let currentMonth = calendarControl.localDate.getMonth();
      let currentYear = calendarControl.localDate.getFullYear();
      calendar.setMonth(currentMonth);
      calendar.setYear(currentYear);
      calendarControl.attachEventsOnNextPrev();
    },
    displayYear: function () {
      let yearLabel = document.querySelector(".calendar .calendar-year-label");
      yearLabel.innerHTML = calendar.getFullYear();
    },
    displayMonth: function () {
      let monthLabel = document.querySelector(
        ".calendar .calendar-month-label"
      );
      monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
    },


    plotSelectors: function () {
      
      document.querySelector(
        ".calendar"
      ).innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
          <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
          <div class="calendar-year-month">
          <div class="calendar-month-label"></div>
          <div>-</div>
          <div class="calendar-year-label"></div>
          </div>
          <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
          </div>
          <div class="calendar-today-date" id="pickedDate">${calendarControl.localDate.getDate()+' '+calendarControl.calMonthName[calendarControl.localDate.getMonth()]+' '+calendarControl.localDate.getFullYear()}</div>
            
         
          <div class="calendar-body"></div></div>`;
          save = $("#pickedDate").text()
    },
    
    selectDate: function (e) {
      let pickedDate = document.getElementById('pickedDate')
     
      pickedDate.textContent = (

        `${e.target.textContent} ${calendarControl.calMonthName[calendar.getMonth()]
        } ${calendar.getFullYear()}`

      );
      save = $("#pickedDate").text()
      document.cookie= encodeURIComponent('time') + '=' + encodeURIComponent(`${save}`);
    },
    selectTime: function (e) {
      let pickedDate = document.getElementById('pickedDate')
      pickedDate.textContent = save + ' | ' + e.target.textContent;
      document.cookie= encodeURIComponent('time') + '=' + encodeURIComponent(`${save} | ${e.target.textContent}`);
    },
    plotDayNames: function () {
      for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
        document.querySelector(
          ".calendar .calendar-body"
        ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
      }
    },
    plotDates: function () {
      document.querySelector(".calendar .calendar-body").innerHTML = "";
      calendarControl.plotDayNames();
      calendarControl.displayMonth();
      calendarControl.displayYear();
      let count = 1;
      let prevDateCount = 0;

      calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
      let prevMonthDatesArray = [];
      let calendarDays = calendarControl.daysInMonth(
        calendar.getMonth() + 1,
        calendar.getFullYear()
      );
      // dates of current month
      for (let i = 1; i < calendarDays; i++) {
        if (i < calendarControl.firstDayNumber()) {
          prevDateCount += 1;
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="prev-dates"></div>`;
          prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
        } else {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
        }
      }
      //remaining dates after month dates
      for (let j = 0; j < prevDateCount + 1; j++) {
        document.querySelector(
          ".calendar .calendar-body"
        ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
      }
      calendarControl.highlightToday();
      calendarControl.plotPrevMonthDates(prevMonthDatesArray);
      calendarControl.plotNextMonthDates();
   
    },
    attachEvents: function () {
      
      let prevBtn = document.querySelector(".calendar .calendar-prev a");
      let nextBtn = document.querySelector(".calendar .calendar-next a");
      let todayDate = document.querySelector(".calendar .calendar-today-date");
      let timeSqr = document.querySelectorAll(".time .timeSquare")
      let dateNumber = document.querySelectorAll(".calendar .dateNumber");
      prevBtn.addEventListener(
        "click",
        calendarControl.navigateToPreviousMonth
      );
      nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
      todayDate.addEventListener(
        "click",
        calendarControl.navigateToCurrentMonth
  
      );
      for (var i = 0; i < dateNumber.length; i++) {
        dateNumber[i].addEventListener(
          "click",
          calendarControl.selectDate,
          false
        );
      }
      for (var i = 0; i < timeSqr.length; i++) {
        timeSqr[i].addEventListener(
          "click",
          calendarControl.selectTime,
          false
        );
      }
    },
    highlightToday: function () {
      let currentMonth = calendarControl.localDate.getMonth() + 1;
      let changedMonth = calendar.getMonth() + 1;
      let currentYear = calendarControl.localDate.getFullYear();
      let changedYear = calendar.getFullYear();
      if (
        currentYear === changedYear &&
        currentMonth === changedMonth &&
        document.querySelectorAll(".number-item")
      ) {
        document
          .querySelectorAll(".number-item")
        [calendar.getDate() - 1].classList.add("calendar-today");
      }
    },
    plotPrevMonthDates: function (dates) {
      dates.reverse();
      for (let i = 0; i < dates.length; i++) {
        if (document.querySelectorAll(".prev-dates")) {
          document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
        }
      }
    },
    plotNextMonthDates: function () {
      let childElemCount = document.querySelector('.calendar-body').childElementCount;
      //7 lines
      if (childElemCount > 42) {
        let diff = 49 - childElemCount;
        calendarControl.loopThroughNextDays(diff);
      }

      //6 lines
      if (childElemCount > 35 && childElemCount <= 42) {
        let diff = 42 - childElemCount;
        calendarControl.loopThroughNextDays(42 - childElemCount);
      }

    },
    loopThroughNextDays: function (count) {
      if (count > 0) {
        for (let i = 1; i <= count; i++) {
          document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
        }
      }
    },
    attachEventsOnNextPrev: async function () {
      calendarControl.plotDates();
      remove();
     
      calendarControl.attachEvents();
      await showTimeSquares();
      $(".number-item").click(async function (){
        console.log('suu')
        $(".calendar-today").removeClass('calendar-today')
        $(this).addClass('calendar-today');
        remove();
        await showTimeSquares();
        calendarControl.attachEvents();
      });
    },
    init: function () {
      calendarControl.plotSelectors();
      calendarControl.plotDates();
      calendarControl.attachEvents();
      
    },
    openModal: function (date) {
      clicked = date;

      const eventForDay = events.find(e => e.date === clicked);

      if (eventForDay) {

      } else {

        let dateDiv = document.getElementById('clickedDate')
        $('.day').on("click", function () {
          $('.day').removeClass('dayChosen')
          $(this).addClass('dayChosen')

        })
        dateDiv.innerText = date

      }


    }
  };
  calendarControl.init();
  
 
  let todayDate = document.querySelector(".calendar .calendar-today-date");

  $(".number-item").click(async function (){
    $(".calendar-today").removeClass('calendar-today')
    $(this).addClass('calendar-today');
    remove();
    await showTimeSquares();
    calendarControl.attachEvents();
    
  });
  async function choseDay(){
    await showTimeSquares();
    calendarControl.attachEvents();
    
  }
  choseDay()
  document.querySelectorAll(".number-item").addEventListener('click', () => openModal(Date))
}

const calendarControl = new CalendarControl();

async function showTimeSquares(){
  
  var save = $("#pickedDate").text();
  var array_date=save.split(' ');
  var day=array_date[0];
  var month=getMonth(array_date[1]);
  var year=array_date[2];
  var timeSquares=['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30',
                  '14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30',
                  '18:00','18:30','19:00','19:30','20:00','20:30','21:00'];

  var employer_name=sessionStorage.getItem('employer_name')
  const employers_sch=fdb.collection('company').doc(`${mfid}`).collection('employers_schedule');
  console.log(`${day}/${month}/${year}`,employer_name)
  const employers_sch_qS=await employers_sch.where('employer_name','==',employer_name).where('date','==',`${day}/${month}/${year}`).get();
  employers_sch_qS.forEach(doc=>{
   
     const i = timeSquares.indexOf(doc.data().time);
    timeSquares.splice(i,1);
  })
  //console.log(timeSquares)
  var time_block=document.querySelector('.time');
  
  timeSquares.forEach((item,i,array)=>{
    var newDiv=document.createElement('div');
    newDiv.classList.add('timeSquare');
    newDiv.innerHTML=item;
    time_block.insertAdjacentElement('beforeend',newDiv);
    $(".timeSquare").click(function () {
      $(".timeSquare").removeClass('timeSquarePicked')
      $(this).addClass('timeSquarePicked')
    });
  })
  if($('.time').children().length>23){
    remove();
    showTimeSquares();
  }
}
  

