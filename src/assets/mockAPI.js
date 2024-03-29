const availableTimesByDate = {
    '2024-03-01': ['10:00', '11:00', '12:00'],
    '2024-02-29': ['10:00', '11:00', '12:00'],
    '2024-02-28': ['14:00', '15:00', '16:00'],
    '2024-02-27': ['10:00', '11:00', '12:00'],
    '2024-02-26': ['14:00', '15:00', '16:00'],
    '2024-02-25': ['10:00', '11:00', '12:00'],
    '2024-02-24': ['14:00', '15:00', '16:00'],
    '2024-02-23': ['10:00', '11:00', '12:00'],
    '2024-02-22': ['14:00', '15:00', '16:00'],
    '2024-02-21': ['10:00', '11:00', '12:00'],
    '2024-02-08': ['13:00', '16:00', '18:00'],
    '2024-02-09': ['11:00', '13:00', '15:00'],
    '2024-02-10': ['14:00', '15:00', '16:00'],
    '2024-02-11': ['10:00', '11:00', '12:00'],
    '2024-02-12': ['14:00', '15:00', '16:00'],
    '2024-02-13': ['10:00', '11:00', '12:00'],
    '2024-02-14': ['14:00', '15:00', '16:00'],
    '2024-02-15': ['10:00', '11:00', '12:00'],
    '2024-02-16': ['14:00', '15:00', '16:00'],
    '2024-02-17': ['10:00', '11:00', '12:00'],
    '2024-02-18': ['14:00', '15:00', '16:00'],
    '2024-02-19': ['10:00', '11:00', '12:00'],
    '2024-02-20': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 0)
    })
  }

  const submitAPI = (formData) => {
    
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 0); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}