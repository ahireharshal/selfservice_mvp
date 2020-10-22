import React, { useState } from 'react';

let data ={
    showDashboard : false,
    showConfirmPage: true,
    showLogin:true,
    showReport: false,
    breadcrumbs:['Login' ],
    userRole:'IT User'
}

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState(data);
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
}

export { MusicPlayerContext, MusicPlayerProvider };