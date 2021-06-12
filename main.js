function validate(dd,mm,yyyy){
    var x= parseInt(dd.value);
    var y= parseInt(mm.value);
    var z= parseInt(yyyy.value);

    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
// Non-leap year case:

    if (y==1 || y>2)
  {
  if (x>ListofDays[y-1])
  {
        alert('Invalid date format!');
        return false;
  }
  else
  {
    alert('Valid date format!');
    return false;
  }
  }

// Leap year case:

  if (y==2)
  {
    var lyear = false;
    if ( ((z % 4)==0 && (z % 100)==0) || (z % 400)==0) 
    {
        lyear = true;
    }
    if ((lyear==false) && (x>=29))
    {
        alert('Invalid date format!');
        return false;
    }
    if ((lyear==true) && (x>29))
    {
        alert('Invalid date format!');
        return false;
    }
  }
  else
  {
  alert("Invalid date format!");
  /*document.check.dd.focus();
  document.check.mm.focus();
  document.check.yyyy.focus();*/
  return false;
  }
}