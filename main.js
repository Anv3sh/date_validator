function validate(dd,mm,yyyy){
    var x= parseInt(dd.value);
    var y= parseInt(mm.value);
    var z= parseInt(yyyy.value);

    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
        alert('Invalid date format!');
        return false;
  }
  }
  if (mm==2)
  {
    var lyear = false;
    if ( (!(yyyy % 4) && yyyy % 100) || !(yyyy % 400)) 
    {
        lyear = true;
    }
    if ((lyear==false) && (dd>=29))
    {
        alert('Invalid date format!');
        return false;
    }
    if ((lyear==true) && (dd>29))
    {
        alert('Invalid date format!');
        return false;
    }
  }
  else
  {
  alert("Invalid date format!");
  document.check.dd.focus();
  document.check.mm.focus();
  document.check.yyyy.focus();
  return false;
  }
}