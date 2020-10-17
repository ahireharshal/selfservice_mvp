import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';
import Rating from '../Rating/Rating'
import VDO from '../CardMedia/CardMedia'
import Typography from '@material-ui/core/Typography';


export const tutorials_cols = [
    { field: 'id', headerName: 'ID', width: 50 },

    {
        field: "video_link",
        headerName: "Video Link",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: (d) => {
            console.log(d.value)
            return <VDO link={d.value} height="100"></VDO>
        }
    },

    { field: 'training_name', headerName: 'KT Name', width: 230 },
    { field: 'duration', headerName: 'Duration', width: 90 },
    {
        field: "trainer",
        headerName: "Trainer",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: (d) => {
            return <div>
                <Typography variant="h4" gutterBottom>
                 {d.value}
                </Typography>
            </div>
        }
    },
    {
        field: "",
        headerName: "Rating",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: () => {
            return <Rating />
        }
    },
];

export const r_tutorials_rows = [
    { id: 1, video_link: 'https://www.youtube.com/watch?v=Hbt56gFj998',training_name:"Redis Basics", duration: '1:30 Hr', trainer: 'Harshal Ahire <Harshal.Ahire@lntinfotech.com>' },
    { id: 2, video_link: 'https://www.youtube.com/watch?v=Hbt56gFj998',training_name:"Redis tutorials", duration: '1:30 Hr', trainer: 'Harshal Ahire <Harshal.Ahire@lntinfotech.com>' },
    { id: 3, video_link: 'https://www.youtube.com/watch?v=Hbt56gFj998',training_name:"Redis for data science", duration: '1:30 Hr', trainer: 'Harshal Ahire <Harshal.Ahire@lntinfotech.com>' },
    { id: 4, video_link: 'https://www.youtube.com/watch?v=Hbt56gFj998',training_name:"Redis", duration: '1:30 Hr', trainer: 'Harshal Ahire <Harshal.Ahire@lntinfotech.com>' },

];




