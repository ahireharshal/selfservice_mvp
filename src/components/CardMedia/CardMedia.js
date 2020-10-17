import React from 'react'
import ReactPlayer from 'react-player/youtube'
 

const VDO = ({link})=>{
return (<div>

<ReactPlayer url={link} height="150px" width="250px" controls="true"/>

</div>)
}


export default VDO
// Only loads the YouTube player