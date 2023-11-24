
  let state={
    hour:00,
    minute:''|00,
    second:''|00,
    ampm:''
  }
  
  function getTime(){
    let date = new Date();
    
    state={
      hour: (date.getHours()>12) ? date.getHours()-12:date.getHours(),
      minute:(date.getMinutes()<10) ? `0${date.getMinutes()}`:date.getMinutes(),
      second:(date.getSeconds()<10) ? `0${date.getSeconds()}`:date.getSeconds(),
      ampm:(date.getHours()>=12) ? 'pm':'am'
    }
    
    document.getElementById('hour').innerHTML=state.hour;
    document.getElementById('minute').innerHTML=state.minute;
    document.getElementById('second').innerHTML=state.second;
    document.getElementById('ampm').innerHTML=state.ampm;
    
    setTimeout(getTime,1000);
  }
  
  getTime()