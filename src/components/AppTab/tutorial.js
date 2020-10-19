import React from 'react'
import Rating from '../Rating/Rating'
import VDO from '../CardMedia/CardMedia'
import Typography from '@material-ui/core/Typography';
import Avatar from '../Avatar/Avatar'
import Link from '@material-ui/core/Link';
export const tutorials_cols = [
    { field: 'id', headerName: 'ID', width: 50 },

    {
        field: "video_link",
        headerName: "Video Link",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: (d) => {
            return <VDO link={d.value} height="100"></VDO>
        }
    },

    { field: 'training_name', headerName: 'KT Name', width: 190 },
    { field: 'duration', headerName: 'Duration', width: 90 },
    {
        field: "trainer",
        headerName: "Trainer",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (d) => {
            return <div>
                <Typography variant="subtitle2" gutterBottom >
                <Avatar text="HA"></Avatar>
                <Link href={"mailto:harshal.ahire@lntinfotech.com"}>
                {d.value
                }
  </Link>
               
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
        renderCell: (d) => {
            return <Rating r_index={d.rowIndex}/>
        }
    },
];

export const r_tutorials_rows = [
    { id: 1, video_link: 'https://www.youtube.com/watch?v=Hbt56gFj998',training_name:"Redis Basics", duration: '1:30 Hr', trainer: 'Harshal Ahire' },
    { id: 2, video_link: 'https://www.youtube.com/watch?v=Hbt56gFj998',training_name:"Redis tutorials", duration: '1:30 Hr', trainer: 'Harshal Ahire' },
    { id: 4, video_link: 'https://www.youtube.com/watch?v=Hbt56gFj998',training_name:"Redis", duration: '1:30 Hr', trainer: 'Harshal Ahire' },

];


export const g_tutorials_rows = [
    { id: 1, video_link: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',training_name:"Github Basics", duration: '1:30 Hr', trainer: 'Harshal Ahire' },
    { id: 2, video_link: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',training_name:"Github CommandLine tutorials", duration: '1:30 Hr', trainer: 'Harshal Ahire' },
];


